'use strict';

angular.module('redditApp')
  .factory('postServiceApi',  ['$http', function($http) {

    var urlBase = '/api/posts';
    var postApi = {};

    postApi.getPosts = function() {
      return $http.get(urlBase);
    };

    postApi.getPost = function(id) {
      return $http.get(urlBase + '/' + id);
    };

    postApi.addPost = function(post) {
      return $http.post(urlBase, post);
    };

    postApi.updatePost = function(id, post) {
      return $http.put(urlBase + '/' + id + '/edit', post);
    };

    postApi.deletePost = function(id) {
      return $http.delete(urlBase + '/' + id + '/delete');
    };

    return postApi;

  }]);
