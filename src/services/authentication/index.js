'use strict';

const authentication = require('feathers-authentication');


module.exports = function() {
  const app = this;

  let config = app.get('auth');
  console.log('CONFIG');
  console.log(config);
  console.log('END_CONFIG');
  
  app.configure(authentication(config));
};
