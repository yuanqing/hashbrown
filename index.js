'use strict';

var kebabCase = function(str) {

  return str.trim()
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            // remove chars that are not alphanumeric, whitespace, '_', or '-'
            .replace(/[\s_]+/g, '-');
            // replace consecutive whitespace or '_' with a single '-'

};

var hashbrown = function(str) {

  var tags = [];

  return {
    text: str.replace(/\#\((.+?)\)/g, function (match, tag) {
      tags.push(kebabCase(tag));
      return tag.trim();
    }),
    tags: tags
  };

};

module.exports = exports = hashbrown;
