
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
  	tbl
  		.increments();
  	tbl
  		.string('username', 255)
  		.notNullable()
  		.unique();
  	tbl
  		.string('password', 128)
  		.notNullable()
    tbl.string('profile-picture')
      .defaultTo('https://cdn.dribbble.com/users/104045/screenshots/3359547/facepalm.png');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
