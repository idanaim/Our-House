describe('ohNotifications Component', () => {
  let element, $scope, createComponent;

  beforeEach(angular.mock.module('OurHouse.components'));

  beforeEach(angular.mock.inject(($rootScope, $compile) => {
    createComponent = (scopeAttrs) => {
      $scope = angular.extend($rootScope.$new(), scopeAttrs);

      element = angular.element('<oh-notifications></oh-notifications>');
      element = $compile(element)($scope);
      $scope.$apply();
    };
  }));

  it('should be true', () => {
    createComponent({});
    expect(true).toBeTruthy();
  });
});
