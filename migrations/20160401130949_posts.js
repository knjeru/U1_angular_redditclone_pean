
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table) {
    table.increments();
    table.string('author');
    table.text('imgUrl');
    table.text('description');
    table.integer('comment_id');
    table
      .foreign('comment_id')
      .references('id')
      .inTable('comments');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
