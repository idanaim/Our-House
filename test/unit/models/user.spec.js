describe('User Model', () => {
  let User;

  beforeEach(angular.mock.module('OurHouse.models'));

  beforeEach(angular.mock.inject((_User_) => {
    User = _User_;
  }));

  it('should be true', () => {
    expect(User).toBeDefined();
  });
});
