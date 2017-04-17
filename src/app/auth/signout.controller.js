(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('SignoutController', SignoutController);

  SignoutController.$inject = ['$state', 'principal', 'logger'];
  /* @ngInject */
  function SignoutController($state, principal, logger) {
    var vm = this;

    

  }
})();
