class sidebarController {
  // @ngInject
  constructor($rootScope, Modal, User) {
    this.Modal = Modal;
    this.currentUser = User.getCurrentUser();
    $rootScope.$on('user-status-changed', ()=> {
      debugger;
      this.currentUser = User.getCurrentUser();
    });
    $rootScope.$on('logout', ()=> {
      debugger;
      this.currentUser = '';
    });

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
