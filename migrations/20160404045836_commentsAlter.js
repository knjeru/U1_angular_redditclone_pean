
exports.up = function(knex, Promise) {
  return knex.schema.table('comments', function(table) {
    table.dropColumn('author');
    table.string('comment_author');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('comments', function(table) {
    table.string('author');
    table.dropColumn('comment_author');
  })
};
