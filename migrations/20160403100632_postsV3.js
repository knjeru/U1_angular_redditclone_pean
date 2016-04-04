
exports.up = function(knex, Promise) {
  return knex.schema.table('posts', function(table) {
    table.dropColumn('author');
    table.string('post_author');
    table.date('datePosted');
    table.timestamp('creationDate').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('posts', function(table) {
      table.dropColumn('datePosted');
      table.dropColumn('creationDate');
      table.string('author');
      table.dropColumn('post_author');
  })
};
