describe('BuildingPosts Model', () => {
  let BuildingPosts;

  beforeEach(angular.mock.module('OurHouse.models'));

  beforeEach(angular.mock.inject((_BuildingPosts_) => {
    BuildingPosts = _BuildingPosts_;
  }));

  it('should be true', () => {
    expect(BuildingPosts).toBeDefined();
  });
});
