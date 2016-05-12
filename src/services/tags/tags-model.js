'use strict';

// tags-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize)
{
	const app = this;
	const tags = sequelize.define('tags',
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
			allowNull: false
		}
	},
	{
		freezeTableName: true
	});
	
	const jtprofilestags = sequelize.define('jtprofilestags',
	{
	role:
		{
			type: Sequelize.STRING,
			allowNull: false,
			defaultValue: 'topic'
		}
	});
	const jtbookmarkstags = sequelize.define('jtbookmarkstags',
	{
	role:
		{
			type: Sequelize.STRING,
			allowNull: false,
			defaultValue: 'topic'
		}
	});
	
	const profiles = app.service('profiles').Model;
	const bookmarks = app.service('bookmarks').Model;
	tags.belongsToMany(profiles, { through: jtprofilestags });
	tags.belongsToMany(bookmarks, { through: jtbookmarkstags });
	
	sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
	.then(function()
	{
		return tags.sync({ force: true });
	})
	.then(function()
	{
		return jtprofilestags.sync({ force: true });
	})
	.then(function()
	{
		return jtbookmarkstags.sync({ force: true });
	})
	.then(function()
	{
		return sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
	})
	.then(function()
	{
		console.log("Table 'tags' synchronised.");
	},
	function(err)
	{
		console.log(err);
	});
	
	return tags;
};
