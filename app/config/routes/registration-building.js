export /* @ngInject */ function registrationBuildingRoutes($stateProvider) {
  $stateProvider

    .state('registration-building', {
      url: '/registration-building',
      templateUrl: '/states/registration-building/registration-building.html',
      controller: 'RegistrationBuildingController',
      controllerAs: 'RegistrationBuilding'
    });
}
