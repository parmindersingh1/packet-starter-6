(function() {
  'use strict';

  angular
    .module('app.project')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    var otherwise = '/auth/signin';
    routerHelper.configureStates(getStates(), otherwise);
  }

  function getStates() {
    return [
      {
        state: 'app',
        config: {
          url: '/app',
          templateUrl: 'app/layout/app.html',
          abstract: 'true',
          // resolve: {
          //   authorize: ['authorization',
          //     function(authorization) {
          //       return authorization.authorize();
          //     }
          //   ]
          // }
        }
      },      
      {
        state: 'app.dashboard',
        config: {
          url: '/dashboard',          
          templateUrl: 'app/project/dashboard/dashboard.html',
          data: {
            roles: ['User']
          },
          controller: 'DashboardController',
          controllerAs: 'vm',
          bindToController : true,
          ncyBreadcrumb: {
            label: 'Site Dashboard'
          },
          title: 'Site Dashboard'
        }
           
      }
      
      
    ];
  }
})();
