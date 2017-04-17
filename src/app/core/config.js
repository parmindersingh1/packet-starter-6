(function () {
  'use strict';

  var core = angular.module('app.core');

 
  core.config(localStorageProviderConfig);

  localStorageProviderConfig.$inject = ['$localStorageProvider'];

  /* @ngInject */
  function localStorageProviderConfig ($localStorageProvider) {
    $localStorageProvider.setKeyPrefix('packet : ');
  }
 


  core.run(trySettingHeader);

  trySettingHeader.$inject = ['$localStorage', '$http'];

  function trySettingHeader($localStorage, $http) {
    // if(principal.isAuthenticated())
    //   $http.defaults.headers.common['Authorization'] = 'Bearer ' + $localStorage._identity.access_token;
    $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
  }

})();
