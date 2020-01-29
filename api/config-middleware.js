const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const corsOptions = {
	origin: function(origin, callback) {
		return callback(null, true);
	},
	optionsSuccessStatus: 200,
	credentails: true
}

module.exports = server => {
	server.use(helmet());
	server.use(express.json());
	server.use(cors(corsOptions));
};