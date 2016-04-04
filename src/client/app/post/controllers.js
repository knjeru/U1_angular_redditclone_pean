'use strict';

// put component controllers here
angular.module('redditApp')
  .controller('MainPostCtrl', ['$scope','$location','postServiceApi', 'commentsApiService', '$log', function($scope,$location,postServiceApi,commentsApiService, $log) {

    $scope.nameFilter = null;
    $scope.postsDB = {};
    $scope.postFormData = {};

    $scope.searchFilter = function(post) {
      var keyword = new RegExp($scope.nameFilter, 'i');
      return !$scope.nameFilter || keyword.test(post.title) || keyword.test(post.author);
    };

    postServiceApi.getPosts()
    .success(function(data) {
      // $log.info(data);
      $scope.postsDB = data;
    });

    $scope.addPost = function() {
      postServiceApi.addPost($scope.postFormData)
      .success(function(data1) {
        postServiceApi.getPosts()
        .success(function(data) {
          // $log.info(data);
          $scope.postsDB = data;
        });
      });
    };

    $scope.updatePost = function(postID) {
      postServiceApi.updatePost(postID, $scope.postFormData)
      .success(function(data) {
        $location.url('/');
      });
    };

    $scope.deletePost = function(postID) {
      postServiceApi.deletePost(postID)
      .success(function(data){
        $location.url('/');
      });
    };

  }]);
