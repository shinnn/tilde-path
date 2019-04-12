# tilde-path

[![npm version](https://img.shields.io/npm/v/tilde-path.svg)](https://www.npmjs.com/package/tilde-path)
[![Build Status](https://travis-ci.com/shinnn/tilde-path.svg?branch=master)](https://travis-ci.com/shinnn/tilde-path)
[![codecov](https://codecov.io/gh/shinnn/tilde-path/branch/master/graph/badge.svg)](https://codecov.io/gh/shinnn/tilde-path)

Resolve a path into an absolute path, using [tilde (`~`)](https://www.gnu.org/software/libc/manual/html_node/Tilde-Expansion.html) if possible

```javascript
// On /Users/shinnn/project
const tildePath = require('tilde-path');

tildePath('foo'); //=> '~/project/foo'
tildePath('foo/bar'); //=> '~/project/foo/bar'
tildePath('../'); //=> '~'
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install tilde-path
```

## API

```javascript
const tildePath = require('tilde-path');
```

### tildePath(*path*)

*path*: `string`  
Return: `string`

On a non-Windows environment,

1. Resolves a given path into an absolute path if it's relative
2. Replaces the [home directory](https://nodejs.org/api/os.html#os_os_homedir) path with `~`

On Windows, it just calls [`path.win32.resolve`](https://nodejs.org/api/path.html#path_path_resolve_paths) because Windows [doesn't support tilde home path](https://superuser.com/a/60421).

```javascript
// On POSIX
tildePath('my/dir'); //=> '~/my/dir'

// On Windows
tildePath('my/dir'); //=> 'C:\\Users\\shinnn\\my\\dir'
```

## License

[ISC License](./LICENSE) © 2018 - 2019 Shinnosuke Watanabe
