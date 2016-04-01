var knex = require('../db/knex');

function Posts() {
  return knex('posts');
}

module.exports = {

  getAllPosts: function(commentID) {
    return Posts()
            .innerJoin('comments', 'posts.id', 'comments.post_id');
  },

  getAPost: function(id) {
    return Posts()
            .where('id', id)
            .innerJoin('comments', 'posts.id', 'comments.post_id');
  },
  
  addPost: function(body) {
    return Posts()
            .insert({
              title: body.title,
              author: body.author,
              imgUrl: body.imgUrl,
              description: body.description
            });
  },

  updatePost: function(id, body) {
    return Posts()
            .where('id', id)
            .update({
              title: body.title,
              author: body.author,
              imgUrl: body.imgUrl,
              description: body.description,
              votes: body.votes
            });
  },

  deletePost: function(id) {
    return Posts()
            .where('id', id)
            .del();
  }

};
