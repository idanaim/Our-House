class trHeaderController {
  // @ngInject
  constructor($state, Modal, ParseApi) {
    this.Parse  = ParseApi.getParse();
    this.Modal  = Modal;
    this.$state = $state;
    this.getUser();
  }

  openAdminPost() {
    this.Modal.open('AdminPost')
  }

  userManagement() {
    this.Modal.open('UserManagement').then((data)=> {
      if (data) {
        this.getUser();
      }
    });
  }

  getUser() {
    let userObj = this.Parse.User.current();
    if (!userObj) {
      this.$state.go('home');
      this.currentUser = '';
    }
    else {
      this.currentUser = userObj._toFullJSON();
      this.$state.go('dashboard');
    }
  }

  logout() {
    this.Parse.User.logOut();
    this.$state.go('home');
    this.getUser();
  }
}
export function trHeader() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/tr-header/tr-header.html',
    controller: trHeaderController,
    controllerAs: 'trHeader',
    bindToController: true
  };
}
