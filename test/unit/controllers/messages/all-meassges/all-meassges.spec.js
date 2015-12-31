describe('MessagesAllMeassgesController', () => {
  let messagesAllMeassgesController, createController;

  beforeEach(angular.mock.module('OurHouse.controllers'));

  beforeEach(angular.mock.inject(($controller) => {
    createController = () => {
      messagesAllMeassgesController = $controller('MessagesAllMeassgesController');
    };
  }));

  beforeEach(() => {
    createController();
  });

  it('should be true', () => {
    expect(messagesAllMeassgesController.message).toMatch('MessagesAllMeassgesController');
  });
});
