const router = require('express');
const Users = require('./users-models.js');

router.get('/', (req, res) => {
	Users.find()
		.then(users => {
			res.json(users);
		})
		.catch(err => res.send(err));
});

module.exports = router;