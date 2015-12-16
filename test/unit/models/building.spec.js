describe('Building Model', () => {
  let Building;

  beforeEach(angular.mock.module('OurHouse.models'));

  beforeEach(angular.mock.inject((_Building_) => {
    Building = _Building_;
  }));

  it('should be true', () => {
    expect(Building).toBeDefined();
  });
});
