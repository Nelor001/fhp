'use strict';
const groups = require('./groups');
const tags = require('./tags');
const profiles = require('./profiles');
const bookmarks = require('./bookmarks');
const authentication = require('./authentication');
const user = require('./user'); //Nelor: Guess these are custom.

const Sequelize = require('sequelize'); //Nelor: Guess this is utility.

module.exports = function() {
  const app = this;

  const sequelize = new Sequelize(app.get('mysql'), {
    dialect: 'mysql',
    logging: false
  });
  app.set('sequelize', sequelize);

  app.configure(authentication);
  
  app.configure(profiles);
  app.configure(user); //Nelor: Depends on -> profiles 
  app.configure(bookmarks);
  
  app.configure(groups);
  app.configure(tags);
  
};
