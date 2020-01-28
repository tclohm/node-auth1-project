const express = require('express');
const router = express.Router();
const Users = require('./users-model.js');
const bcrypt = require("bcryptjs");

router.get('/', (req, res) => {
	if(req.headers.username && req.headers.password) {
		const username = req.headers.username;
		const password = req.headers.password;
		Users.findBy({ username })
			.first()
			.then(usr => {
				bcrypt.compare(password, usr.password).then(match => {
					if(match) {
						Users.find()
							.then(users => {
								res.json(users);
							})
							.catch(err => {
								res.send(err);
							})
					} else {
						res.status(400).json({ message: "You shall not pass" });
					}
				})
			})
	} else {
		res.status(400).json({ error: "You shall not pass" });
	}
	// Users.find()
	// 	.then(users => {
	// 		res.json(users);
	// 	})
	// 	.catch(err => res.send(err));
});

module.exports = router;