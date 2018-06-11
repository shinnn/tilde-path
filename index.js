'use strict';

const {homedir} = require('os');
const {win32: {resolve: win32Resolve}, posix: {resolve: posixResolve}} = require('path');

module.exports = function tildePath(...args) {
	const argLen = args.length;

	if (argLen !== 1) {
		throw new RangeError(`Expected 1 argument (<string>), but got ${argLen || 'no'} arguments.`);
	}

	if (process.platform === 'win32') {
		return win32Resolve(args[0]);
	}

	const home = homedir();
	const path = posixResolve(args[0]);

	if (path === home) {
		return '~';
	}

	const homeWithTrailingSlash = `${home}/`;

	if (path.startsWith(homeWithTrailingSlash)) {
		return path.replace(homeWithTrailingSlash, '~/');
	}

	return path;
};
