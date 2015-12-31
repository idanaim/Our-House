describe('MessagesController', () => {
  let messagesController, createController;

  beforeEach(angular.mock.module('OurHouse.controllers'));

  beforeEach(angular.mock.inject(($controller) => {
    createController = () => {
      messagesController = $controller('MessagesController');
    };
  }));

  beforeEach(() => {
    createController();
  });

  it('should be true', () => {
    expect(messagesController.message).toMatch('MessagesController');
  });
});
