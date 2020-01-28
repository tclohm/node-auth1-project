const express = require('express');
const session = require('express-session');
// persistence
const KnexSessionStore = require('connect-session-knex')(session);
const dbConnection = require("../data/db-config.js");

const apiRouter = require('./api-router.js');
const configureMW = require('./config-middleware.js');

// MARK: - Server holds all our middleware

const sessionConfig = {
	name: 'monkey', // sid
	secret: process.env.SESSION_SECRET || 'keep it secret, keep it safe!', // goes into .env
	cookie: {
		maxAge: 1000 * 30, // valid for 30 minutes. Then expires
		secure: false, // true in production
		httpOnly: true, // JS cannot access cookies on the browsers
	},
	resave: false, // 
	saveUninitialized: true, // GDPR laws against setting cookies automatically (only true if they accept cookies)
	// persistences
	store: new KnexSessionStore({
		knex: dbConnection,
		tablename: 'sessions',
		sidfieldname: 'sid',
		createtable: true,
		clearInterval: 60000,
	}),
};

const server = express();
server.use(session(sessionConfig));
configureMW(server);

server.use('/api', apiRouter);

module.exports = server;