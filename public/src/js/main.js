var dependencies = ['ui.router'];
var application = angular.module('application', dependencies);

application.run(['$rootScope', '$state', '$stateParams',
  function($rootScope, $state, $stateParams) {

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

  }
]);

application.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'dist/views/main.html'
    });

  }]
);