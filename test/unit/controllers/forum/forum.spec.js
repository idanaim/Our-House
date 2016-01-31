describe('ForumController', () => {
  let forumController, createController;

  beforeEach(angular.mock.module('OurHouse.controllers'));

  beforeEach(angular.mock.inject(($controller) => {
    createController = () => {
      forumController = $controller('ForumController');
    };
  }));

  beforeEach(() => {
    createController();
  });

  it('should be true', () => {
    expect(forumController.message).toMatch('ForumController');
  });
});
