export class MessagesMessageController {

  // @ngInject
  constructor($stateParams, $state, Message, Notifications, ParseApi) {
    this.Message       = Message;
    this.$state        = $state;
    this.Notifications = Notifications;
    this.Parse         = ParseApi.getParse();
    this.replyMessage  = {}
    this.$stateParams  = $stateParams;
    if ($stateParams.message) {
      this.currentMessage = $stateParams.message;
    }
    else {
      this.getMessage();
    }
  }

  replay() {
    this.showReply = !this.showReply;
    if (!this.replyMessage.title) {
      this.replyMessage = {
        title: "re: " + this.currentMessage.message.title,
        content: "re:" + this.currentMessage.message.content
      }
    }
  }

  sendNotification(messageId) {
    console.log(messageId);
    let notification = {
      "messageId": messageId,
      "fromUserId": this.currentUser.objectId,
      "fromUsername": this.currentUser.name,
      "fromUserLastName": this.currentUser.lastname,
      "toUserId": this.currentMessage.fromUserId,
      "readByUser": false,
      "type": 2,
      "apartmentNumber": this.currentUser.apartmentNumber
    };
    this.Notifications.setNotification(notification)
  }

  deleteMessage() {
    this.currentMessage.parseMessage.destroy();
    this.$state.go('messages.all-messages');
  }

  send() {
    this.currentUser        = this.Parse.User.current()._toFullJSON();
    this.message            = {};
    this.message.buildingId = this.currentUser.buildingId;
    this.message.fromUserId = this.currentUser.objectId;
    this.message.toUserId   = this.currentMessage.fromUserId;
    this.message.type       = 2;
    this.message.name       = this.currentUser.name;
    this.message.title      = this.replyMessage.title;
    this.message.content    = this.replyMessage.content;
    this.message.name       = this.currentUser.name;
    this.message.lastname   = this.currentUser.lastname;
    this.Message.setNewMessage(this.message).then((message)=> {
      this.sendNotification(message._toFullJSON().objectId);
      this.$state.go('dashboard')
    });
  }

  getMessage() {
    this.Message.getMessageById(this.$stateParams.messageId).then((message)=> {
      this.currentMessage = message;
    });
  }
}
