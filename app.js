'use strict';

const path = require('path');
const koa = require('koa');
const cors = require('kcors');
const mount = require('koa-mount');
// maybe we serve a raider-online thingy here
// const serveStatic = require('koa-static');
const api = require('./lib/api');
const version = require('./lib/version');

const app = koa();
app.use(cors());

// maybe we serve a raider-online thingy here
// any static files can go into public
// const publicPath = path.join(__dirname, '..', 'public');
// app.use(serveStatic(publicPath, {
// 	maxage: 30 * 24 * 60 * 60 * 1000,
// 	default: 'index.html'
// }));

app.use(mount('/api', api));
app.use(mount('/version', version));

app.on('error', console.error);

app.listen(process.env.PORT || 4001);
