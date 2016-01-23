class sidebarController {
  // @ngInject
  constructor($state, $scope, Modal, ParseApi) {
    this.Parse  = ParseApi.getParse();
    this.Modal  = Modal;
    this.$state = $state;
    this.$scope = $scope;
    this.getUser();
  }

  openAdminPost() {
    this.Modal.open('AdminPost');
  }

  userManagement() {
    this.Modal.open('UserManagement').then((data)=> {
      if (data) {
        this.getUser();
      }
    });
  }

  sendMessage() {
    this.Modal.open('SendMessage');
  }

  getUser() {
    let userObj = this.Parse.User.current();
    if (!userObj) {
      this.$state.go('home');
      this.currentUser = '';
    }
    else {
      this.currentUser = userObj._toFullJSON();
      if (this.currentUser.firstTime) {
        this.$state.go('registration-building');
      }
      else {
        this.$state.go('dashboard');
      }
    }
  }

  logout() {
    this.Parse.User.logOut().then(()=> {
      this.$scope.$emit('logout', true);
      this.$state.go('home');
      this.getUser();
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
