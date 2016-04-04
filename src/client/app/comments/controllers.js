'use strict';

angular.module('redditApp')
  .controller('MainCommentCtrl', ['$scope', 'commentsApiService', '$location', function($scope, commentsApiService, $location){

    $scope.commentFormData = {};


    $scope.addComment = function() {
      commentsApiService.addComment($scope.commentFormData)
      .success(function(data){
        // $location.url('/');
      });
    }


  }]);
