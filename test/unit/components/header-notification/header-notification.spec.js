describe('headerNotification Component', () => {
  let element, $scope, createComponent;

  beforeEach(angular.mock.module('OurHouse.components'));

  beforeEach(angular.mock.inject(($rootScope, $compile) => {
    createComponent = (scopeAttrs) => {
      $scope = angular.extend($rootScope.$new(), scopeAttrs);

      element = angular.element('<header-notification></header-notification>');
      element = $compile(element)($scope);
      $scope.$apply();
    };
  }));

  it('should be true', () => {
    createComponent({});
    expect(true).toBeTruthy();
  });
});
