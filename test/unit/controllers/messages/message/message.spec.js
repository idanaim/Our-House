describe('MessagesMessageController', () => {
  let messagesMessageController, createController;

  beforeEach(angular.mock.module('OurHouse.controllers'));

  beforeEach(angular.mock.inject(($controller) => {
    createController = () => {
      messagesMessageController = $controller('MessagesMessageController');
    };
  }));

  beforeEach(() => {
    createController();
  });

  it('should be true', () => {
    expect(messagesMessageController.message).toMatch('MessagesMessageController');
  });
});
