/* globals describe, it, expect */
'use strict';

var hashbrown = require('..');

describe('hashbrown(str)', function() {

  it('extract tags from the given `str`', function() {
    expect(hashbrown('#( Lorem ipsum! ) Dolor #( sit ) amet!')).toEqual({
      text: '<p>Lorem ipsum! Dolor sit amet!</p>\n',
      tags: ['lorem-ipsum', 'sit']
    });
    expect(hashbrown('#(foo)')).toEqual({
      text: '<p>foo</p>\n',
      tags: ['foo']
    });
  });

  it('doesn\'t fail when the given `str` has no tags', function() {
    expect(hashbrown('foo')).toEqual({
      text: '<p>foo</p>\n',
      tags: []
    });
  });

});
