const express = require('express');
const router = express.Router();
const Users = require('../users/users-model.js');
const bcrypt = require('bcryptjs');

router.post('/register', (req, res) => {
	let user = req.body;
	bcrypt.genSalt(13, function(err, salt) {
		bcrypt.hash(user.password, salt, function(err, hash) {
			if(err) {
				res.status(500).json({ message: `Error building hash: ${err}` });
			} else {
				user.password = hash;
				Users.add(user)
					.then(usr => {
						res.status(201).json(usr);
					})
					.catch(err => {
						res.status(500).json(error);
					})
			}
		});
	});
});

router.post('/login', (req, res) => {
	let { username, password } = req.body;

	Users.findBy({ username })
		.first()
		.then(usr => {
			if(usr) {
				bcrypt.compare(password, usr.password).then(match => {
					if(match) {
						// session
						// req.session.loggedIn = true;
						req.session.user = usr;
						res.status(201).json({ message: `Welcome ${usr.username}`});
					} else {
						res.status(401).json({ message: 'You shall not pass!' });
					}
				})
				.catch(err => {
					res.status(500).json(error);
				})
			}
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ message: 'Invalid Credentials' })
		})
});

router.get('/logout', (req, res) => {
	if(req.session) {
		req.session.destroy(err => {
			if(err) {
				res.json({ message: 'you can checkout any time you like, but you can never leave'})
			} else {
				res.status(200).json({ message: 'bye, thanks for playing!' });
			}
		})
	} else {
		res.status(200).json({ message: 'You were never here to begin with' });
	}
});

module.exports = router;