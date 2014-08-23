# Hashbrown.js [![npm Version](http://img.shields.io/npm/v/hashbrown.svg?style=flat)](https://www.npmjs.org/package/hashbrown) [![Build Status](https://img.shields.io/travis/yuanqing/hashbrown.svg?style=flat)](https://travis-ci.org/yuanqing/hashbrown) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/hashbrown.svg?style=flat)](https://coveralls.io/r/yuanqing/hashbrown)

> Extract tags inlined in running text.

## Usage

Hashbrown is an experiment in embedding meta data within running text. It is similar to the concept of the [hashtag](https://support.twitter.com/articles/49309-using-hashtags-on-twitter), only that **the post-processed text is syntactically correct**. This is because the `#(` and `)` markup used to demarcate a tag is removed from the text.

```js
var str = '#( Lorem ipsum! ) Dolor #( sit ) amet!';

hashbrown(str);
/* =>
 * {
 *   text: '<p>Lorem ipsum! Dolor sit amet!</p>\n',
 *   tags: ['lorem-ipsum', 'sit']
 * }
 */
```

A tag is converted to [kebab-case](http://stackoverflow.com/a/12273101/348359) as follows:

1. Discard any character that isn&rsquo;t alphanumeric, whitespace, a dash, or an underscore.
2. Replace whitespace and underscore characters with a dash.

## API

### hashbrown(str)

Parses the given Markdown-formatted `str`, and returns an object containing the processed `text`, and an array of `tags`.

## Installation

Install via [npm](https://www.npmjs.org/package/hashbrown):

```bash
$ npm i --save hashbrown
```

## License

[MIT license](https://github.com/yuanqing/hashbrown/blob/master/LICENSE)
