const express = require('express');
const session = require('express-session');

const apiRouter = require('./api-router.js');
const configureMW = require('./config-middleware.js');

// MARK: - Server holds all our middleware

const sessionConfig = {
	name: 'monkey', // sid
	secret: process.env.SESSION_SECRET || 'keep it secret, keep it safe!', // goes into .env
	cookie: {
		maxAge: 1000 * 30, // valid for 30 seconds. Then expires
		secure: false, // true in production
		httpOnly: true, // JS cannot access cookies on the browsers
	},
	resave: false, // 
	saveUninitialized: false, // GDPR laws against setting cookies automatically (only true if they accept cookies)

}

const server = express();

configureMW(server);

server.use(session(sessionConfig))
server.use('/api', apiRouter);

module.exports = server;