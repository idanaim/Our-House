const NOTE_TYPE = {
  REQUEST: 1,
  MESSAGE: 2,
  COMPLAIN:4
};

class ohNotificationsController {
  // @ngInject
  constructor($interval, $state, $scope, ParseApi, Notifications, User) {
    this.badgeIcon     = 0;
    this.$state        = $state;
    this.Parse         = ParseApi.getParse();
    this.Notifications = Notifications;
    this.User          = User;
    this.NOTE_TYPE     = NOTE_TYPE;
    this.test          = 1;
    this.checkNotifications();
    $interval(this.checkNotifications.bind(this), 10000);
    $scope.$on('user-status-changed', ()=>this.badgeIcon = 0);
  }

  checkNotifications() {
    let currentUser = this.Parse.User.current();

    if (currentUser) {
      this.Notifications.getNotifications(currentUser._toFullJSON().objectId).then((notes)=> {
        this.myNotifications = notes;
        this.countNewNotifications(notes);

      }, this.badgeIcon = 0);
    }
  }

  openMessage(message) {
    if (!message.note.readByUser) {
      message.parseNote.set("readByUser", true);
      message.parseNote.save();
    }
    this.$state.go('messages.message', { messageId: message.note.messageId });
  }

  countNewNotifications(notes) {
    let countNewMessages = 0;
    notes.forEach((notification)=> {
      if (!notification.note.readByUser) {
        countNewMessages++;
      }
    });
    if (this.badgeIcon != countNewMessages) {
      this.badgeIcon = countNewMessages;
    }
  }

  markAsRead(parseNote) {
    parseNote.set("readByUser", true);
    parseNote.save();
  }

  approveUserRequest(notification) {
    this.User.getUseApprovalById(notification.note.fromUserId).then((userApproval)=> {
      userApproval.set("isApproved", true);
      userApproval.save();
      notification.parseNote.destroy();
    });
  }
}

export function ohNotifications() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/oh-notifications/oh-notifications.html',
    controller: ohNotificationsController,
    controllerAs: 'ohNotifications',
    bindToController: true
  };
}
