var module = angular.module('application.directives', []);

module.directive('buttonAnimate', 
  function() {

    return {
      link: function($scope, element, attrs) {

        element.bind('mouseenter', function() {
          element.addClass('hvr-buzz'); 
        });

        element.bind('mouseleave', function() {
          element.removeClass('hvr-buzz');
        });

      }
    };

  }
);