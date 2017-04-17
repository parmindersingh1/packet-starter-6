(function () {
  'use strict';

  angular
    .module('app.auth')
    .factory('role', role);

  role.$inject = ['$localStorage', 'ACCESS_LEVEL'];

  /* @ngInject */
  function role($localStorage, ACCESS_LEVEL) {
    var service = {
      isAdminRole: isAdminRole,
      isViewerRole : isViewerRole,
      currentAccessLevel : currentAccessLevel,
      getMainRole : getMainRole
    };
    return service;

    ////////////////

    function isAdminRole() {
      if($localStorage._identity) {
        var roles = $localStorage._identity.userDetails.userRoles;
        var index = _.findIndex(roles, function(o) { return _.endsWith(o.role.name, 'ADMIN')});
        return index >= 0;
      }
    }

    function isViewerRole() {
      if($localStorage._identity) {
        var roles = $localStorage._identity.userDetails.userRoles;
        var index = _.findIndex(roles, function(o) { return _.endsWith(o.role.name, 'VIEW')});
        return index >= 0;
      }
    }

    function currentAccessLevel() {
       var roles = $localStorage._identity.userDetails.userRoles;
      var index = _.findIndex(roles, function(o) { return _.includes(o.role.name,'SUPER')});
      if(index >= 0) return ACCESS_LEVEL.SUPER_ADMIN; //100000 for super admin access level
      index = _.findIndex(roles, function(o) { return _.includes(o.role.name,'CLIENT')});
      if(index >= 0) return ACCESS_LEVEL.CLIENT_ADMIN; //10000 for client level
      index = _.findIndex(roles, function(o) { return _.includes(o.role.name,'REGION')});
      if(index >= 0) return ACCESS_LEVEL.REGION_ADMIN; //1000 for region level
      index = _.findIndex(roles, function(o) { return _.includes(o.role.name,'SITE')});
      if(index >= 0) return ACCESS_LEVEL.SITE_ADMIN; //100 for region level
      index = _.findIndex(roles, function(o) { return _.includes(o.role.name,'ASSETGROUP')});
      if(index >= 0) return ACCESS_LEVEL.ASSET_GROUP_ADMIN; //10 for asset group level
      index = _.findIndex(roles, function(o) { return _.includes(o.role.name,'ASSET')});
      if(index >= 0) return ACCESS_LEVEL.ASSET_ADMIN; //1 for asset level
      else return 0;
    }

    function getMainRole() {
      var mainRole = null;
      if($localStorage._identity) {
        var roles = $localStorage._identity.userDetails.userRoles;
        if(isAdminRole()) {
          mainRole = 'Site Admin';
          var indexRegion = _.findIndex(roles, function(o) { return o.role.name.includes('REGION')});
          if(indexRegion >= 0) mainRole = 'Region Admin';
          var indexClient = _.findIndex(roles, function(o) { return o.role.name.includes('CLIENT')});
          if(indexClient >= 0) mainRole = 'Client Admin';
          var indexSuperAdmin = _.findIndex(roles, function(o) { return o.role.name.includes('SUPER')});
          if(indexSuperAdmin >= 0) mainRole = 'Super Admin';
        }
        else {
          mainRole = 'Site Viewer';
          var indexRegion = _.findIndex(roles, function(o) { return o.role.name.includes('REGION')});
          if(indexRegion >= 0) mainRole = 'Region Viewer';
          var indexClient = _.findIndex(roles, function(o) { return o.role.name.includes('CLIENT')});
          if(indexClient >= 0) mainRole = 'Client Viewer';
        }
        return mainRole;
      }

    }
  }

})();
