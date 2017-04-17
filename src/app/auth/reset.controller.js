(function () {
  'use strict';

  angular
    .module('app.auth')
    .controller('ResetController', ResetController);

  ResetController.$inject = ['$q', 'resetFactory', '$state', 'validationHelperFactory', '$location', '$stateParams', 'toast'];

  function ResetController($q, resetFactory, $state, validationHelperFactory, $location, $stateParams, toast) {
    var vm = this;


  }
}());
