describe('ProfessionalController', () => {
  let professionalController, createController;

  beforeEach(angular.mock.module('OurHouse.controllers'));

  beforeEach(angular.mock.inject(($controller) => {
    createController = () => {
      professionalController = $controller('ProfessionalController');
    };
  }));

  beforeEach(() => {
    createController();
  });

  it('should be true', () => {
    expect(professionalController.message).toMatch('ProfessionalController');
  });
});
