var knex = require('../db/knex');

function Comments() {
  return knex('comments');
}

module.exports = {
  getPostComments: function(id) {
    return Commments()
            .where('post_id', id)
  }
};
