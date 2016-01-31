describe('Forum Model', () => {
  let Forum;

  beforeEach(angular.mock.module('OurHouse.models'));

  beforeEach(angular.mock.inject((_Forum_) => {
    Forum = _Forum_;
  }));

  it('should be true', () => {
    expect(Forum).toBeDefined();
  });
});
