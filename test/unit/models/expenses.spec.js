describe('Expenses Model', () => {
  let Expenses;

  beforeEach(angular.mock.module('OurHouse.models'));

  beforeEach(angular.mock.inject((_Expenses_) => {
    Expenses = _Expenses_;
  }));

  it('should be true', () => {
    expect(Expenses).toBeDefined();
  });
});
