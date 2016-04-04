'use strict';

angular.module('redditApp')
  .factory('commentsApiService', function($http) {

  var urlBase = '/api/posts/comments';
  var commentsApi = {};

  commentsApi.addComment = function(comment) {
    $http.post(urlBase, comment);
  };

  commentsApi.updateComment = function(id, comment) {
    $http.put(urlBase + '/' + id + '/edit', comment);
  };

  commentsApi.deleteComment = function(id) {
    $http.delete(urlBase + '/' + id + '/delete');
  };

  return commentsApi;

});
