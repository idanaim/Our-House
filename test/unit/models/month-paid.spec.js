describe('MonthPaid Model', () => {
  let MonthPaid;

  beforeEach(angular.mock.module('OurHouse.models'));

  beforeEach(angular.mock.inject((_MonthPaid_) => {
    MonthPaid = _MonthPaid_;
  }));

  it('should be true', () => {
    expect(MonthPaid).toBeDefined();
  });
});
