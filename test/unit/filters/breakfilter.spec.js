describe('breakfilter Filter', () => {
  let breakfilter;

  beforeEach(angular.mock.module('OurHouse.filters'));

  beforeEach(angular.mock.inject(($filter) => {
    breakfilter = $filter('breakfilter');
  }));

  it('should be true', () => {
    expect(breakfilter).not.toBeNull();
  });

});
