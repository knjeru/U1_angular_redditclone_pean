
exports.up = function(knex, Promise) {
  return knex.schema.table('posts', function(table) {
    table.dropColumn('comment_id');
    table.string('title');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('posts', function(table) {
    table.integer('comment_id');
  })
};
