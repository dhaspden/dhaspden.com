angular
  .module('application.controllers.main', [])
  .controller('MainController', MainController);

MainController.$inject = ['$scope', 'ContactService'];

/* Main controller for the landing page */
function MainController($scope, ContactService) {
  var vm = this;

  vm.contact = {};
  vm.contact.email;
  vm.sent = vm.sent || false;

  vm.isInputValid = isInputValid;
  vm.isAllValid = isAllValid;
  vm.submitMessage = submitMessage;

  /* Checks that the input given is valid */
  function isInputValid(form, element) {
    if ($scope[form][element].$valid) return true;
    return false;
  }

  /* Checks that the form is completely valid */
  function isAllValid(form) {
    if ($scope[form].$valid) return true;
    return false;
  }

  /* Sends the message to the server to be sent */
  function submitMessage(sendData) {
    ContactService.send(sendData).then(
      function(success) {
        vm.sent = true;
      }
    )
  }
}