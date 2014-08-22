'use strict';

var marked = require('marked');

var dasherise = function(str) {

  return str.toLowerCase()
            .replace(/[^\w\s-]/g, '') // remove any non-alphanumeric, whitespace, '_', or '-'
            .replace(/[\s_]+/g, '-'); // replace whitespace and '_' with '-'

};

var hashbrown = function(str) {

  var tags = [];

  return {
    text: marked(str.replace(/\#\((.+?)\)/g, function (match, tag) {
      tags.push(dasherise(tag));
      return tag;
    })),
    tags: tags
  };

};

module.exports = exports = hashbrown;
