(function () {
  'use strict';

  angular
    .module('app.auth')
    .factory('principal', principal);

  principal.$inject = ['$q', '$http', '$timeout', 'logger', '$localStorage', '__env'];

  /* @ngInject */
  function principal($q, $http, $timeout, logger, $localStorage, __env) {

    var service = {
      //authenticate: authenticate,
      identity: identity,
      isAuthenticated: isAuthenticated,

      //isIdentityResolved: isIdentityInLocalStorage,
      isInAnyRole: isInAnyRole,
      isInRole: isInRole,

      signin: signin,
      signout: signout
    };
    return service;


    function identity(force) {
      var deferred = $q.defer();
      if (force === true) {
        clearLocalStorage();
      }
      // check and see if we have retrieved the identity data from the server. if we have, reuse it by immediately resolving
      if (isIdentityInLocalStorage()) {
        if (isAuthenticated()) {
          deferred.resolve($localStorage._identity);
        }
        else {        
         
        }
      }
      else {
        deferred.reject("Signin required");
      }
      return deferred.promise;
    }

    function isAuthenticated() {
      if (isIdentityInLocalStorage()) {
        var currentTimeStamp = Date.now();
        var loggedInTimeStamp = $localStorage.loggedInTimeStamp;
        var expiryTimePeriod = $localStorage._identity.expires_in * 1000;//in seconds as rest of things are in milliseconds
        if ((currentTimeStamp - loggedInTimeStamp) < expiryTimePeriod) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    }

    function isIdentityInLocalStorage() {
      return angular.isDefined($localStorage._identity);
    }

    function isInAnyRole() {
      //TODO Below implementation need to be changed. Should get data from _identity.userDetails object
      return true;
    }

    function isInRole() {
      // TODO Below implementation need to be changed. Should get data from _identity.userDetails object
      return true;
    }

    function clearLocalStorage() {
      if (isIdentityInLocalStorage()) {
        $localStorage.$reset();
        // delete $localStorage._identity;
        // delete $localStorage.loggedInTimeStamp;
      }
    }

    function signin(user, password, rememberMe) {
      var deferred = $q.defer();
      $http.post(__env.uiServerUrl, {userName: user, password: password})
        .then(function (response) {
            if (response.status == 200) {
              $localStorage._identity = response.data;
              $localStorage.loggedInTimeStamp = Date.now();
              //_authenticated = true;
              deferred.resolve($localStorage._identity);
            }
            else {
              clearLocalStorage();
              //_authenticated = false;
              deferred.reject("Invalid Login credentials");
            }
          },
          function (response) {
            clearLocalStorage();
            //_authenticated = false;
            deferred.reject("Error connecting server");
          });
      return deferred.promise;

    }

    function signout() {
      clearLocalStorage();
      //_authenticated = false;
    }
  }

})();


