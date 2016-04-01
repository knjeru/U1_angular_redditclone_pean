
exports.up = function(knex, Promise) {
  return knex.schema.table('posts', function(table) {
    table.integer('votes').defaultTo(0);
  })
};

exports.down = function(knex, Promise) {
    table.dropColumn('votes');
};
