'use strict';

// Declare app level module which depends on views, and components
angular.module('gitHubApp', [
  'ngRoute',
  'gitHubApp.view1',
  'gitHubApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
