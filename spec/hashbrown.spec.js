/* globals describe, it, expect */
'use strict';

var hashbrown = require('..');

describe('hashbrown(str)', function() {

  it('extract tags from the given `str`', function() {
    expect(hashbrown('#( Lorem ipsum! ) Dolor #( sit ) amet!')).toEqual({
      text: 'Lorem ipsum! Dolor sit amet!',
      tags: ['lorem-ipsum', 'sit']
    });
    expect(hashbrown('#(foo)')).toEqual({
      text: 'foo',
      tags: ['foo']
    });
  });

  it('doesn\'t fail when the given `str` has no tags', function() {
    expect(hashbrown('foo')).toEqual({
      text: 'foo',
      tags: []
    });
  });

});
