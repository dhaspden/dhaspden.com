var dependencies = [];
var application = angular.module('application', dependencies);

application.run(['$rootScope', '$state', '$stateParams',
  function($rootScope, $state, $stateParams) {

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

  }
]);