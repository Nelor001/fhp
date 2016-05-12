'use strict';

const service = require('feathers-sequelize');
const tags = require('./tags-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: tags.call(app, app.get('sequelize'))/*,
    paginate: {
      default: 5,
      max: 25
    }*/
  };

  // Initialize our service with any options it requires
  app.use('/tags', service(options));

  // Get our initialize service to that we can bind hooks
  const tagsService = app.service('/tags');

  // Set up our before hooks
  tagsService.before(hooks.before);

  // Set up our after hooks
  tagsService.after(hooks.after);
};
