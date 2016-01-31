class ohFormController {
  // @ngInject
  constructor($log, Forum, User) {
    this.Forum       = Forum;
    this.currentUser = User.getCurrentUser();
    this.buildingId  = User.getCurrentUser().buildingId;
    this.getForumData();
  }

  getForumData() {
    this.Forum.getForumByBuildingId(this.buildingId).then((chats)=> {
      this.chats = chats;
    });
  }

  sendMessage() {
    let message = {
      "buildingId": this.buildingId,
      "message": this.message,
      "userId": this.currentUser.objectId,
      "lastname": this.currentUser.lastname,
      "firstname": this.currentUser.name
    }
    this.chats.push(message);
    this.Forum.sendMessage(message);
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
