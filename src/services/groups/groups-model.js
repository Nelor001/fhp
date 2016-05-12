'use strict';

// groups-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize)
{
	const app = this;
	const groups = sequelize.define('groups',
	{
    id:
		{
			type: Sequelize.INTEGER.UNSIGNED,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
	name:
		{
			type: Sequelize.STRING,
			allowNull: false
		}
	},
	{
		freezeTableName: true
	});

	const jtusersgroups = sequelize.define('jtusersgroups',
	{
	role:
		{
			type: Sequelize.STRING,
			allowNull: false,
			defaultValue: 'member'
		}
	});
	const jtgroupsgroups = sequelize.define('jtgroupsgroups',
	{
	role:
		{
			type: Sequelize.STRING,
			allowNull: false,
			defaultvalue: 'member'
		}
	});
	
	const profiles = app.service('profiles').Model;
	
	groups.belongsToMany(profiles, { through: jtusersgroups });
	groups.belongsToMany(groups, { as: 'member', through: jtgroupsgroups });
	
	sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
	.then(function()
	{
		return groups.sync({ force: true });
	})
	.then(function()
	{
		return jtgroupsgroups.sync({ force: true }); //Sync the join tables.
	})
	.then(function()
	{
		return jtusersgroups.sync({ force: true });
	})
	.then(function()
	{
		return sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
	})
	.then(function()
	{
		console.log("Table 'groups' synchronised.");
	},
	function(err)
	{
		console.log(err);
	});
	
	//groups.sync();

	return groups;
};
