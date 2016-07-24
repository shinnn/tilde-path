'use strict';

const path = require('path');

const tildify = require('tildify');

module.exports = function tildePath(filePath) {
  return tildify(path.resolve(filePath));
};
