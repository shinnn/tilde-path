'use strict';

const os = require('os');
const path = require('path');

const test = require('tape');
const tildePath = require('.');

const home = os.homedir();

process.chdir(home);

test('tildePath()', t => {
  t.strictEqual(tildePath.name, 'tildePath', 'should have a function name.');

  t.strictEqual(
    tildePath(path.join(home, 'foo/bar')),
    path.normalize('~/foo/bar'),
    'should convert a path to a tilde path.'
  );

  t.strictEqual(
    tildePath(path.resolve('/')),
    path.resolve('/'),
    'should not modify the path if a string doesn\'t include user home directory.'
  );

  t.strictEqual(
    tildePath('baz'),
    path.normalize('~/baz'),
    'should support a relative path.'
  );

  t.strictEqual(
    tildePath(''),
    '~',
    'should accept an empty string.'
  );

  t.throws(
    () => tildePath(123),
    /^TypeError.*Path must be a string. Received 123/,
    'should throw a type error when it takes a non-string argument.'
  );

  t.throws(
    () => tildePath(),
    /^TypeError.*Path must be a string. Received undefined/,
    'should throw a type error when it takes no arguments.'
  );

  t.end();
});
