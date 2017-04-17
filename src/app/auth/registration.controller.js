(function() {
    'use strict';

    angular
        .module('app.auth')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['$rootScope','$scope', 'logger', '$state', 'registerFactory', "__env"];
    /* @ngInject */
    function SignupController($rootScope, $scope,logger, $state, registerFactory,  __env) {
        var vm = this;
        


    }
})();
