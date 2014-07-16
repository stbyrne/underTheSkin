// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('magazine', ['ionic', 'magazine.controllers', 'magServices'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function($timeout) {
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    };
      $timeout(function(){
          navigator.splashscreen.hide();
      }, 4000);
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  
  .state('mag', {
      url: "/mag",
      templateUrl: "templates/mag.html",
      controller: 'MagPageCtrl'
    });
    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/mag');
});



/////////////////////////////////////////////////////////////

/*.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html"
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html"
        }
      }
    })
    .state('app.teams', {
      url: "/teams",
      views: {
        'menuContent' :{
          templateUrl: "templates/team-list.html",
          controller: 'TeamListCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/teams/:teamId",
      views: {
        'menuContent' :{
          templateUrl: "templates/team-detail.html",
          controller: 'TeamDetailCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/teams');
});*/

//////////////////////////////////////////////////

/*var premiereApp = angular.module('premiereApp', [
    'ngRoute',
    'premiereAnimations',
    'premiereControllers',
    'premiereServices'
]);

premiereApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/teams', {
        templateUrl: 'partials/team-list.html',
        controller: 'TeamListCtrl'
      }).
      when('/teams/:teamId', {
        templateUrl: 'partials/team-detail.html',
        controller: 'TeamDetailCtrl'
      }).
      otherwise({
        redirectTo: '/teams'
      });
  }]);*/

