'use strict';

// bookmarks-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize)
{
	const app = this;
	
	const bookmarks = sequelize.define('bookmarks',
	{
	id:
		{
			type: Sequelize.INTEGER.UNSIGNED,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
	url:
		{
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
	name:
		{
			type: Sequelize.STRING,
			allowNull: true,
		}
	},
	{
		freezeTableName: true
	});
	
	const profiles = app.service('profiles').Model;
	bookmarks.belongsTo(profiles, { as: 'creator' });
	
	sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
	.then(function()
	{
		return bookmarks.sync({ force: true });
	})
	.then(function()
	{
		return sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
	})
	.then(function()
	{
		console.log("Table 'bookmarks' synchronised.");
	},
	function(err)
	{
		console.log(err);
	});
	
	return bookmarks;
};
