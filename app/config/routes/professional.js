export /* @ngInject */ function professionalRoutes($stateProvider) {
  $stateProvider

    .state('professional', {
      url: '/professional',
      templateUrl: '/states/professional/professional.html',
      controller: 'ProfessionalController',
      controllerAs: 'Professional'
    });
}
