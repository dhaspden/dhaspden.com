angular
  .module('application.services', [])
  .factory('ContactService', ContactService);

ContactService.$inject = ['$http', '$q'];

/* Service for sending email messages to server */
function ContactService($http, $q) {
  return {
    send: send
  };

  /* Sends the email message to the server for processing */
  function send(sendData) {
    var q = $q.defer();

    $http.post('/api/contact', sendData)
    .success(function(data) {
      q.resolve(data);
    });

    return q.promise;
  }
}