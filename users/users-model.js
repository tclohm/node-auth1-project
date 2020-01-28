const db = require('../data/db-config.js');

module.exports = {
	add,
	find,
	findBy,
	findById,
};

function find() {
	return db('users')
		.select('id', 'username', 'profile-picture');
}

function findBy(filter) {
	return db('users')
		.select('id', 'username','password', 'profile-picture')
		.where(filter)
}

function add(user) {
	return db('users')
		.insert(user, "id")
		.then(ids => {
			const [id] = ids;
			return findById(id);
		});
}

function findById(id) {
	return db('users')
		.select('id', 'username', 'password', 'profile-picture')
		.where("id", id)
		.first();
}