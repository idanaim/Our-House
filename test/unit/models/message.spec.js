describe('Message Model', () => {
  let Message;

  beforeEach(angular.mock.module('OurHouse.models'));

  beforeEach(angular.mock.inject((_Message_) => {
    Message = _Message_;
  }));

  it('should be true', () => {
    expect(Message).toBeDefined();
  });
});
