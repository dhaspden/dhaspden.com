var dependencies = ['ui.router', 'duScroll', 'application.controllers.main'];
var application = angular.module('application', dependencies);

/* Configures the state manager for the Angular application */
application.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise(function($injector, $location) {
      $injector.invoke(['$state', function($state) {
        $state.go('home');
      }]);
    });

    $stateProvider
    .state('home', {
      url: '/',
      controller: 'MainController',
      templateUrl: 'src/views/main.html'
    });

  }]
);

/* Runs when the Angular application starts */
application.run(['$rootScope', '$state', '$stateParams',
  function($rootScope, $state, $stateParams) {

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

  }
]);