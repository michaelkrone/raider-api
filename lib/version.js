'use strict';

const koa = require('koa');
const version = require('../node_modules/raider/package.json').version;

const app = module.exports = koa();

app.use(function *(next){
	yield next;
	this.body = {version};
});
