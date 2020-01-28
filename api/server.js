const express = require('express');

const apiRouter = require('./api-router.js');
const configureMW = require('./config-middleware.js');

const server = express();

configureMW(server);

server.use('/api', apiRouter);

module.exports = server;