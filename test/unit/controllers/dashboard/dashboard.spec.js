describe('DashboardController', () => {
  let dashboardController, createController;

  beforeEach(angular.mock.module('OurHouse.controllers'));

  beforeEach(angular.mock.inject(($controller) => {
    createController = () => {
      dashboardController = $controller('DashboardController');
    };
  }));

  beforeEach(() => {
    createController();
  });

  it('should be true', () => {
    expect(dashboardController.message).toMatch('DashboardController');
  });
});
