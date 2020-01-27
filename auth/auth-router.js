const router = require('express');
const Users = require('../users/users-model.js');
const bcrypt = require('bcryptjs');

router.get('/register', (req, res) => {
	let user = req.body;

});

router.post('/login', (req, res) => {

});

module.exports = router;