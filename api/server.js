const express = require('express');

const apiRouter = require('./api-router.js');
const configureMW = require('./configureMW.js');

const server = express();

configureMW(server);

server.use('/api', apiRouter);

module.exports = server;