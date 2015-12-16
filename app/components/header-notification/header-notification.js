class headerNotificationController {
  // @ngInject
  constructor($log, $element) {
    $log.log($element);
  }
}

export function headerNotification() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/header-notification/header-notification.html',
    controller: headerNotificationController,
    controllerAs: 'headerNotification',
    bindToController: true
  };
}
