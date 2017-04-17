(function () {
  'use strict';

  angular
    .module('app.auth')
    .factory('authorization', authorization);

  authorization.$inject = ['$rootScope', '$state', 'principal', 'logger'];

  /* @ngInject */
  function authorization($rootScope, $state, principal, logger) {
    var service = {
      authorize: authorize
    };
    return service;

    ////////////////

    function authorize() {
      return principal.identity()
        .then(identityResolved, identityResolvedFailure);
    }

    function identityResolved() {         
      if (isAuthenticated) {
        
      }
      else {
        // user is not authenticated. stow the state they wanted before you
        // send them to the signin state, so you can return them when you're done
        routeToSignin();
      }
    }

    function identityResolvedFailure() {
      logger.info("User is not logged in. Redirecting to Login Page");
      routeToSignin();
    }

    function routeToSignin() {
      $rootScope.returnToState = $rootScope.toState;
      $rootScope.returnToStateParams = $rootScope.toStateParams;
      $state.go('auth.signin');
    }

  }

})();
