var application = angular.module('application.controllers.main', []);

/* Main controller for the landing page */
application.controller('MainController', ['$scope',
  function($scope) {

    /* Checks that the input given is not blank */
    $scope.isInputValid = function(form, element) {
      if ($scope[form][element].$valid) return true;
      return false;
    }

    /* Sets up the particle backdrop for the splash screen */
    $scope.initParticles = function() {
      particlesJS('welcome-splash', {
        particles: {
          color: '#fff',
          color_random: false,
          shape: 'circle',
          opacity: {
            opacity: 1,
            anim: {
              enable: true,
              speed: 1.5,
              opacity_min: 0,
              sync: false
            }
          },
          size: 2.5,
          size_random: true,
          nb: 150,
          line_linked: {
            enable_auto: true,
            distance: 100,
            color: '#fff',
            opacity: 1,
            width: 1,
            condensed_mode: {
              enable: false,
              rotateX: 600,
              rotateY: 600
            }
          },
          anim: {
            enable: true,
            speed: 1
          }
        },
        interactivity: {
          enable: true,
          mouse: {
            distance: 300
          },
          detect_on: 'canvas',
          mode: 'grab',
          line_linked: {
            opacity: .5
          },
          events: {
            onclick: {
              enable: true,
              mode: 'push',
              nb: 4
            },
            onresize: {
              enable: true,
              mode: 'bounce',
              density_auto: true,
              density_area: 800
            }
          }
        },
        retina_detect: true
      });
    }

    console.log('Main Controller loaded.');
  
  }
]);