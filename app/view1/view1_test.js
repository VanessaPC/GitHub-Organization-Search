'use strict';

describe('gitHubApp.view1 module', function() {

  beforeEach(module('gitHubApp.view1'));

  describe('view1 controller', function(){

    it('should instantiate a new controller', inject(function($controller, $rootScope) {
      //spec body
      var $scope = $rootScope.$new();
      var view1Ctrl = $controller('gitHubSearch', { $scope: $scope });

      expect(view1Ctrl).toBeDefined();
    }));

    it('should initialize scope variables', inject(function($controller, $rootScope, $http, $sce) {
      //spec body
      var $scope = $rootScope.$new();
      var view1Ctrl = $controller('gitHubSearch', { $scope: $scope, $http: $http, $sce: $sce });

      expect($scope.search).toBe('');
      expect($scope.entries.length).toEqual(0);
      expect($scope.languages.length).toEqual(0);
      expect($scope.branches.length).toEqual(0);
    }));

  });
});