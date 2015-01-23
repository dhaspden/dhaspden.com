var dependencies = ['ui.router', 'application.directives'];
var application = angular.module('application', dependencies);

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
      templateUrl: 'dist/views/main.html'
    });

  }]
);

application.run(['$rootScope', '$state', '$stateParams',
  function($rootScope, $state, $stateParams) {

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

  }
]);