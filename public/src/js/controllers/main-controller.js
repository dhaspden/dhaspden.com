var application = angular.module('application.controllers.main', []);

/* Main controller for the landing page */
application.controller('MainController', ['$scope', '$http', '$q', 'ContactService',
  function($scope, $http, $q, ContactService) {

    console.log('Main Controller loaded.');

    $scope.contact = {};
    $scope.contact.email;
    $scope.sent = $scope.sent || false;

    /* Checks that the input given is valid */
    $scope.isInputValid = function(form, element) {
      if ($scope[form][element].$valid) return true;
      return false;
    }

    /* Checks that the form is completely valid */
    $scope.isAllValid = function(form) {
      if ($scope[form].$valid) return true;
      return false;
    }

    /* Sends the message to the server to be sent */
    $scope.submitMessage = function(sendData) {
      ContactService.send(sendData).then(
        function(success) {
          $scope.sent = true;
        }
      )
    }
  
  }
]);