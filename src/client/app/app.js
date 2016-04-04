'use strict';


// name your angular app here
angular.module('redditApp', ['ui.router', 'door3.css'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    // Redirect to root if user puts in non-existent path
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
          url: '/',
          templateUrl: '/app/post/views/main.html',
          controller: 'MainPostCtrl',
          css: '/css/post.css'
      });

}]);
