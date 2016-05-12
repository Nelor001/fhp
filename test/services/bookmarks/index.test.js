'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('bookmarks service', function() {
  it('registered the bookmarks service', () => {
    assert.ok(app.service('bookmarks'));
  });
});
