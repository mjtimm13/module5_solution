(function() {
'use strict';

angular.module('admin')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('admin', {
      abstract: true,
      templateUrl: 'src/admin/admin.html'
    })
    .state('admin.home', {
      url: '/',
      templateUrl: 'src/admin/home/home.html'
    });
}
})();
