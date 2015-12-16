describe('ParseApi Service', () => {
  let ParseApi;

  beforeEach(angular.mock.module('OurHouse.services'));

  beforeEach(angular.mock.inject((_ParseApi_) => {
    ParseApi = _ParseApi_;
  }));

  it('should be true', () => {
    expect(ParseApi).toBeDefined();
  });
});
