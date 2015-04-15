var application = angular.module('application.services', []);

/* Service for sending e-mail to me */
application.factory('ContactService', ['$http', '$q', 
  function($http, $q) {

    console.log('Contact Service loaded.');

    return {
      send: function(sendData) {
        var q = $q.defer();

        $http.post('/api/contact', sendData)
        .success(function(data) {
          q.resolve(data);
        });

        return q.promise;
      }
    };

  }
]);