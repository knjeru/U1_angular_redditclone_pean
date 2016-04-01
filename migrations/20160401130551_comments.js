
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table) {
    table.increments();
    table.string('author');
    table.text('text');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
