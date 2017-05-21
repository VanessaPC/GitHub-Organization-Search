'use strict';

angular.module('gitHubApp.view1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'gitHubSearch'
    });
  }])

  // Defining the controller that is going to reach the API
  // and fetch the information to display the organization
  .controller('gitHubSearch', function ($scope, $http, $sce) {

    // scope search checks for the name the user is requesting 
    $scope.search = '';

    // scope entries stores the name of the repos in each organization    
    $scope.entries = [];

    // scope languages gives us the languages from all the repos the organization has   
    $scope.languages = [];

    // scope branches stores the name of the branches in each repo   
    $scope.branches = [];

    // Declare a function that is going to watch search and change
    $scope.$watch('search', () => {
      if ($scope.search !== '') {
        fetch();
      }
    });

    // Now I define the function that will fetch the data to display
    function fetch(data) {
      // because json has some restrictions, we need to use $sce to trust the URL that makes the request
      $http.jsonp($sce.trustAsResourceUrl('https://api.github.com/orgs/' + $scope.search + '/repos?access_token=' + '33b51a75e68787ee27b6fe6486d19f64b1afad76'), {
        jsonCallbackParam: 'callback',

        // I am caching the return so it doesnt keep retrieving information
        cache: true
      }).then((response) => {

        // Handling error, if we are receiving a 404 we tell the user about it
        if (response.data.data.documentation_url) {
          return;
        }

        // Now scope entries will have all the data we need, and we choose on the html what to display
        $scope.entries = response.data.data;

        // Language only needs to store one example of all the languages in the repos, therefore, looping through them 
        // and filtering, will create an array of all of them. So we loop through the length of the entries.
        for (var i = 0; i < $scope.entries.length; i++) {
          // a strict variable with scope inside the function will make it easy
          // to remember what information we are looping through in the future (more clarity when reading).
          let language = $scope.entries[i].language;

          // To get the number of the branches, we need to make the second call to fetch the array and count it. 
          // Since the original call, doesn´t fetch the number of branches. 
          $scope.fetchBranches($scope.entries[i]);

          // If the language of each entry doesn´t exist in scope.languages, we push it. 
          if ($scope.languages.indexOf(language) === -1) {
            $scope.languages.push(language);
          }
        }

        // After summarising to the user the languages he can find under the organisation
        // I allow them to filter the repo by language, the function below completes the HTML 
        $scope.filter = (language) => {
          $scope.filterLanguage = language;
        }

      });

    }


    // If the user has clicked on a repo, we want to show the branches, therefore, we get the name of the repo 
    // add it to the url and make a second call to show the data to the user. 
    $scope.fetchBranches = (repo) => {
      $http.jsonp($sce.trustAsResourceUrl('https://api.github.com/repos/' + $scope.search + '/' + repo.name + '/branches?access_token=' + '33b51a75e68787ee27b6fe6486d19f64b1afad76'), {
        jsonCallbackParam: 'callback',
        // in order to stop requesting the same information over and over,
        // we cache it, so if they user requests it once, it will be available till end of session (or reload). 
        cache: true
      }).then((response) => {

        // repo branches now has stored all the objects/branches and we can now display on the html the information for the user  
        repo.branches = response.data.data;

        // Fetching the branches, and making them visible, so the user can close the list when they wish. 
        repo.branchesVisible = false;
      });
    }

  });