(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('ForgotController', ForgotController);

  ForgotController.$inject = ['$q','forgotFactory','$state', 'validationHelperFactory', 'logger'];

  function ForgotController($q, forgotFactory, $state, validationHelperFactory, logger) {
    var vm = this;

   
  }

}());
