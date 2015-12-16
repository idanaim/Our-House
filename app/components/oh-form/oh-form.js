class ohFormController {
  // @ngInject
  constructor($log, $element) {
    $log.log($element);
  }
}

export function ohForm() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/oh-form/oh-form.html',
    controller: ohFormController,
    controllerAs: 'ohForm',
    bindToController: true
  };
}
