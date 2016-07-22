'use strict';
/**
 * 中间件加载
 * @type {[type]}
 */

const render = require('../lib/render');
const util = require('../lib/util');
const md5 = require('../lib/md5');
const coRequest = require('co-request');
const config = require('./common/config');

/**
 * 用户登录页面
 * @param {[type]} req           [description]
 * @param {[type]} res           [description]
 * @yield {[type]} [description]
 */
const login = function*(req, res) {
	const ctx = this;
	ctx.body = yield render(ctx, 'pages/user-login', {
		session: ctx.session
	});
}

module.exports = {
	complete: complete,
	login: login,
	center: center
}