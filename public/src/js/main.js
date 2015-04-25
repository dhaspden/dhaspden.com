var dependencies = ['ui.router', 'duScroll', 'application.controllers.main', 
  'application.directives', 'application.services'];

angular
  .module('application', dependencies)
  .config(applicationConfig)
  .run(applicationRun);

applicationConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
applicationRun.$inject = ['$rootScope', '$state', '$stateParams'];

/* Configures the state manager for the Angular application */
function applicationConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise(function($injector, $location) {
    $injector.invoke(['$state', function($state) {
      $state.go('home');
    }]);
  });

  $stateProvider
  .state('home', {
    url: '/',
    controller: 'MainController as main',
    templateUrl: '/src/views/main.html'
  });
}

/* Runs when the Angular application starts */
function applicationRun($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
}