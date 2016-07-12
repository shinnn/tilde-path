# tilde-path

[![NPM version](https://img.shields.io/npm/v/tilde-path.svg)](https://www.npmjs.com/package/tilde-path)
[![Build Status](https://travis-ci.org/shinnn/tilde-path.svg?branch=master)](https://travis-ci.org/shinnn/tilde-path)
[![Build status](https://ci.appveyor.com/api/projects/status/62oanqlwsc3ahwkk?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/tilde-path)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/tilde-path.svg)](https://coveralls.io/r/shinnn/tilde-path)
[![Dependency Status](https://david-dm.org/shinnn/tilde-path.svg)](https://david-dm.org/shinnn/tilde-path)
[![devDependency Status](https://david-dm.org/shinnn/tilde-path/dev-status.svg)](https://david-dm.org/shinnn/tilde-path#info=devDependencies)

A [Node](https://nodejs.org/) module to convert a path to an absolute tilde path

```javascript
// On /User/shinnn/project
const tildePath = require('tilde-path');

tildePath('foo'); //=> '~/project/foo'
tildePath('foo/bar'); //=> '~/project/foo/bar'
tildePath('../'); //=> '~'
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install tilde-path
```

## API

```javascript
const tildePath = require('tilde-path');
```

### tildePath(*path*)

*path*: `String`  
Return: `String`

It converts a given path to an absolute path if it's relative, then converts it to a tilde path.

```javascript
tildePath('.'); //=> '~/current/path'
tildePath(''); //=> '~/current/path'
tildePath('foo/../bar/../////baz/..'); //=> '~/current/path'

tildePath('/Users/shinnn/already/absolute'); //=> '~/already/absolute'
tildePath('/Outside/home/dir'); //=> '/Outside/home/dir'
```

## License

[The Unlicense](./LICENSE)
