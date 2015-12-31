export /* @ngInject */ function breakfilter() {
  return function (input) {

    if (input !== undefined) {
      return input.replace(/\n/g, '<br />');
    }
  };
}
