'use strict';

const {homedir} = require('os');
const {posix, win32} = require('path');

const pretendPlatform = require('pretend-platform');
const test = require('tape');
const tildePath = require('.');

test('tildePath()', t => {
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

test('tildePath() on a Windows environment', t => {
  pretendPlatform('win32');

  t.equal(
    tildePath('foo'),
    win32.resolve('foo'),
    'should make a given path absolute without using tilde.'
  );

  t.end();
});

test('tildePath() on a non-Windows environment', t => {
  pretendPlatform('aix');
  process.chdir(homedir());

  t.equal(
    tildePath('baz'),
    '~/baz',
    'should convert a relative path to an absolute tilde path.'
  );

  t.equal(
    tildePath(''),
    '~',
    'should accept an empty string.'
  );

  const newHome = '/Users/__test__';

  process.env.HOME = newHome;
  process.env.USERPROFILE = newHome;

  t.equal(
    tildePath(posix.join(`${newHome}/foo/bar`)),
    '~/foo/bar',
    'should convert an absolute path to a tilde path.'
  );

  t.equal(
    tildePath(posix.resolve('/')),
    posix.resolve('/'),
    'should not modify the path if a string doesn\'t include user home directory.'
  );

  t.equal(
    tildePath(`${homedir()}abcdef`),
    `${homedir()}abcdef`,
    'should not modify the path if it\'s owned by another user.'
  );

  t.end();
});
