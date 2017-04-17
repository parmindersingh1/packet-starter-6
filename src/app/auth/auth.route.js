(function() {
  'use strict';

  angular
    .module('app.auth')
    .run(appRun);

  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'auth',
        config: {
          abstract: true,
          url: '/auth',
          template: '<div ui-view class="fade-in-right-big smooth"></div>',
        }
      },
      {
        state: 'auth.signin',
        config: {
          url: '/signin',
          templateUrl: "app/auth/login_login.html",
          controller: 'SigninController',
          controllerAs: 'vm'
        }
      },
      {
        state: 'auth.signout',
        config: {
          controller: 'SignoutController',
          controllerAs: 'vm',
          cache: false
        }
      },
      {
        state: 'auth.forgot',
        config: {
          url: '/forgot',
          templateUrl: "app/auth/login_forgot.html",
          controller: 'ForgotController',
          controllerAs: 'vm'
        }
      },
      {
        state: 'auth.registration',
        config: {
          url: '/registration',
          templateUrl: "app/auth/login_registration.html",
          controller: 'SignupController',
          controllerAs: 'vm'
        }
      },
      {
        state: 'auth.userProfile',
        config: {
          url: '/userProfile',          
          templateUrl: 'app/auth/qrcode/editUserProfile.html',                
          controller: 'EditUserProfileController',
          controllerAs: 'vm'
       
        }
      },
      {
        state: 'auth.lock',
        config: {
          url: '/lock',
          templateUrl: "app/auth/login_lock_screen.html"
        }
      }
    ];
  }
})();
