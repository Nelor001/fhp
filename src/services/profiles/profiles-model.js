'use strict';

// profiles-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize)
{
	const app = this;
	
	const profiles = sequelize.define('profiles',
	{
	id:
		{
			type: Sequelize.INTEGER.UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
	name:
		{
			type: Sequelize.STRING,
			allowNull: true
		},
	firstName:
		{
			type: Sequelize.STRING,
			allowNull: true
		},
	avatar:
		{
			type: Sequelize.STRING,
			allowNull: true,
		},
	dateOfBirth:
		{
			type: Sequelize.DATE,
			allowNull: true
		}
	},
	{
		freezeTableName: true
	});
	
	sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
	.then(function()
	{
		return profiles.sync({ force: true });
	})
	.then(function()
	{
		return sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
	})
	.then(function()
	{
		console.log("Table 'profiles' synchronised.");
	},
	function(err)
	{
		console.log(err);
	});

	return profiles;
};
