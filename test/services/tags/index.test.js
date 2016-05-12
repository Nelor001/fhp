'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('tags service', function() {
  it('registered the tags service', () => {
    assert.ok(app.service('tags'));
  });
});
