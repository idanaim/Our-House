describe('Professionals Model', () => {
  let Professionals;

  beforeEach(angular.mock.module('OurHouse.models'));

  beforeEach(angular.mock.inject((_Professionals_) => {
    Professionals = _Professionals_;
  }));

  it('should be true', () => {
    expect(Professionals).toBeDefined();
  });
});
