var knex = require('../db/knex');

function Comments() {
  return knex('comments');
}

module.exports = {

  getPostComments: function(id) {
    return Commments()
            .where('post_id', id);
  },

  addComment: function(body) {
    return Comments()
            .insert({
              author: body.comment_author,
              text: body.text,
              post_id: body.post_id
            });
  },

  updateComment: function(id, body) {
    return Comments()
            .where('id', id)
            .update({
              author: body.comment_author,
              text: body.text
            });
  },

  deleteComment: function(id) {
    return Comments()
            .where('id', id)
            .del();
  }

};
