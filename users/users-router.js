const express = require('express');
const router = express.Router();
const Users = require('./users-model.js');
const bcrypt = require("bcryptjs");
const restrictMW = require('../auth/restricted-middleware.js');

router.get('/', restrictMW, (req, res) => {
	Users.find()
		.then(users => {
			res.json(users);
		})
		.catch(err => res.send(err));
});

module.exports = router;