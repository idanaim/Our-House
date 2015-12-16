export /* @ngInject */ function dashboardRoutes($stateProvider) {
  $stateProvider

    .state('dashboard', {
      url: '/dashboard',
      templateUrl: '/states/dashboard/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'Dashboard'
    });
}
