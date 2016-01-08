//ANGULAR
var app = angular.module('personalSite', ['ngRoute']);

app.controller("MainController", ['$scope', function($scope){
	$scope.name = "Mae"	
}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({enabled:false});

  $routeProvider.
    when('/',
    { templateUrl: '/main.html',
        controller: 'MainController',
        controllerAs: 'mainCtrl'
    }).when('/projects',
    { templateUrl: 'projects.html',
        controller: 'MainController',
        controllerAs: 'mainCtrl'
    }).when('/rails',
    { templateUrl: 'projects/rails.html',
        controller: 'MainController',
        controllerAs: 'mainCtrl'
    }).when('/forum',
      { templateUrl: 'projects/forum.html',
        controller: 'MainController',
        controllerAs: 'mainCtrl'       
    }).when('/outages',
      { templateUrl: 'projects/mta-outages.html',
        controller: 'MainController',
        controllerAs: 'mainCtrl'     
    }).otherwise(
      { redirectTo: '/'
    });
 }]) ;

