describe('RegistrationBuildingController', () => {
  let registrationBuildingController, createController;

  beforeEach(angular.mock.module('OurHouse.controllers'));

  beforeEach(angular.mock.inject(($controller) => {
    createController = () => {
      registrationBuildingController = $controller('RegistrationBuildingController');
    };
  }));

  beforeEach(() => {
    createController();
  });

  it('should be true', () => {
    expect(registrationBuildingController.message).toMatch('RegistrationBuildingController');
  });
});
