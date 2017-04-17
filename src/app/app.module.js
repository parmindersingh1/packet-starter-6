// Ionic Starter App
(function () {
  angular.module('underscore', [])
  .factory('_', function() {
    return window._; // assumes underscore has already been loaded on the page
  });


  angular.module('packet', [
    'app.auth',
    'app.core',
    'app.project',
    'app.logger',
    'app.router',
    'app.layout'
  ]);
})();


