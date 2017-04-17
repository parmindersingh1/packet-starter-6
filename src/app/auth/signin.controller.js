(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('SigninController', SigninController);

  SigninController.$inject = ['$rootScope', '$scope', 'logger', '$state', 'principal', "__env", 'authorization'];
  /* @ngInject */
  function SigninController($rootScope, $scope, logger, $state, principal,  __env, authorization) {
    var vm = this;
    vm.login = function() {
    	$state.go('app.dashboard');
    }
    
  }
})();
