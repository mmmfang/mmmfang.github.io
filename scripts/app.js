//SLIDER WILL INITIALIZE UPON ENTERING SITE
    $(document).ready(function(){
      $('.slider').slider({full_width: true});

    });
        
//MODAL TRIGGER  
   $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
       
//ANGULAR
var app = angular.module('personalSite', ['ngRoute']);

app.controller("MainController", [$scope, function($scope){
	$scope.name = "Mae"	
}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({enabled:true});

  $routeProvider.
    when('/about',
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


