(function() {
  'use strict';

  angular
    .module('app.auth')
    .factory('forgotFactory', forgotFactory);

  forgotFactory.$inject = ['$http','__env'];

  function forgotFactory($http, __env) {
    var service = {};

    
    return service;
  }
}());
