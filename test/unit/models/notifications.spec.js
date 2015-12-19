describe('Notifications Model', () => {
  let Notifications;

  beforeEach(angular.mock.module('OurHouse.models'));

  beforeEach(angular.mock.inject((_Notifications_) => {
    Notifications = _Notifications_;
  }));

  it('should be true', () => {
    expect(Notifications).toBeDefined();
  });
});
