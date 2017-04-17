(function() {
    'use strict';

    angular
        .module('app.auth')
        .factory('registerFactory', registerFactory);

    registerFactory.$inject = ['$http','__env'];

    function registerFactory($http, __env) {
        var service = {};

        
        return service;
    };
}());
