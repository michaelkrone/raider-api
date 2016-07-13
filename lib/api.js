'use strict';

const koa = require('koa');
const raider = require('raider');

const app = module.exports = koa();

app.use(function *(next) {
	yield next;
	const q = this.query;

	try {
		this.body = {name: raider(q.char, q.adverb === '0' ? false : true, q.mood)};
	} catch (e) {
		this.throw('invalid arguments', 400);
	}
});

