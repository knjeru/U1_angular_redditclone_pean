
exports.up = function(knex, Promise) {
  return knex.schema.table('comments', function(table) {
    table.integer('post_id');
    table
      .foreign('post_id')
      .references('id')
      .inTable('posts');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('comments', function(table) {
    table.dropColumn('post_id');
  })
};
