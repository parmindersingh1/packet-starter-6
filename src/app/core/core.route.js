(function () {
  'use strict';

  angular
    .module('app.core')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    var otherwise = '/error/404';
    routerHelper.configureStates(getStates(), otherwise);
    //routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'error',
        config: {
          url: '/error',
          template: '<div ui-view class="fade-in-up"></div>'
        }
      },
      {
        state: 'error.401',
        config: {
          url: '/401',
          templateUrl: 'app/core/401.html',
          title: '401'
        }
      },
      {
        state: 'error.403',
        config: {
          url: '/403',
          templateUrl: 'app/core/403.html',
          title: '403'
        }
      },
      {
        state: 'error.404',
        config: {
          url: '/404',
          templateUrl: 'app/core/404.html',
          title: '404'
        }
      },
      {
        state: 'error.500',
        config: {
          url: '/500',
          templateUrl: 'app/core/500.html',
          title: '500'
        }
      }
    ];
  }
})();
