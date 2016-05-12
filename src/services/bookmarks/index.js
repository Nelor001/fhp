'use strict';

const service = require('feathers-sequelize');
const bookmarks = require('./bookmarks-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: bookmarks.call(app, app.get('sequelize'))/*,
    paginate: {
      default: 5,
      max: 25
    }*/
  };

  // Initialize our service with any options it requires
  app.use('/bookmarks', service(options));

  // Get our initialize service to that we can bind hooks
  const bookmarksService = app.service('/bookmarks');

  // Set up our before hooks
  bookmarksService.before(hooks.before);

  // Set up our after hooks
  bookmarksService.after(hooks.after);
};
