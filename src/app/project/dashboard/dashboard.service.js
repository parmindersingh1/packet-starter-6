(function() {
  'use strict';
  angular.module('app.project')
    .factory('dashboardFactory', dashboardFactory);

  dashboardFactory.$inject = ['$http', '__env'];

  function dashboardFactory($http, __env) {
    var service = {};  
     
   

    return service;
  };
})();
