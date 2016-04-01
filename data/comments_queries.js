var knex = require('../db/knex');

function Comments() {
  return knex('comments');
}

module.exports = {

  getPostComments: function(id) {
    return Commments()
            .where('post_id', id);
  },
  
  addComment: function(id, body) {
    return Comments()
            .insert({
              author: body.author,
              text: body.text,
              post_id: id
            });
  },

  updateComment: function(id, body) {
    return Comments()
            .where('id', id)
            .update({
              author: body.author,
              text: body.text
            });
  },

  deleteComment: function(id) {
    return Comments()
            .where('id', id)
            .del();
  }

};
