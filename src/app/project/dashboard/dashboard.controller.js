(function () {
  'use strict';

  angular
    .module('app.project')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$rootScope', '$scope', '$state', '$q', 'logger', 'dashboardFactory',  '$timeout'];
  /* @ngInject */
  function DashboardController($rootScope, $scope, $state, $q, logger, dashboardFactory, $timeout) {
    var vm = this;
    vm.title = 'Site Dashboard';
    vm.subTitle = 'Home Page';
   
  }
   

})();




 
