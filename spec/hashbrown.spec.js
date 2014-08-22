/* globals describe, it, expect */
'use strict';

var hashbrown = require('..');

describe('hashbrown', function() {

  it('should work', function() {
    var str = 'The quick brown #(fox) jumps over the #(lazy dog)!';
    expect(hashbrown(str)).toEqual({
      text: '<p>The quick brown fox jumps over the lazy dog!</p>\n',
      tags: ['fox', 'lazy-dog']
    });
  });

});
