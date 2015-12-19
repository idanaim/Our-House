class ohHeaderController {
  // @ngInject
  constructor($state, $scope, Modal, ParseApi) {
    this.Parse  = ParseApi.getParse();
    this.Modal  = Modal;
    this.$state = $state;
    this.$scope = $scope;
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
    this.$scope.$broadcast('logout', true);
  }
}
export function ohHeader() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/oh-header/oh-header.html',
    controller: ohHeaderController,
    controllerAs: 'ohHeader',
    bindToController: true
  };
}
