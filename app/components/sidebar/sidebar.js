class sidebarController {
  // @ngInject
  constructor(Modal) {
    this.Modal = Modal;

  }

  reportExpense() {
    this.Modal.open('ReportExpense');
  }
}

export function sidebar() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/sidebar/sidebar.html',
    controller: sidebarController,
    controllerAs: 'sidebar',
    bindToController: true
  };
}
