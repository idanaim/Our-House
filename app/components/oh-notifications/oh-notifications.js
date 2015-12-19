class ohNotificationsController {
  // @ngInject
  constructor($interval, $scope, ParseApi, Notifications, User) {
    this.badgeIcon     = 0;
    this.Parse         = ParseApi.getParse();
    this.Notifications = Notifications;
    this.User          = User;
    this.checkNotifications();
    $interval(this.checkNotifications.bind(this), 10000);
    $scope.$on('logout', ()=>this.badgeIcon = 0);
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

  countNewNotifications(notes) {
    let countNewMessages = 0;
    notes.forEach((notification)=> {
      this.buildNotification(notification.note);
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

  buildNotification(note) {
    if (note.isRequest) {
      note.description = `<span>${note.fromUsername}-${note.fromUserLastName}</span>
      <span> מדירה </span><span>${note.apartmentNumber}</span> <span>רוצה להצטרף לקבוצה</span>
      `;
    }
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
