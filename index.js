'use strict';

var path = require('path');

var tildify = require('tildify');

module.exports = function tildePath(filePath) {
  return tildify(path.resolve(filePath));
};
