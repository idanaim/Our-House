export class MessagesAllMessagesController {

  // @ngInject
  constructor($state,Message, ParseApi) {
    this.Message     = Message;
    this.Parse       = ParseApi.getParse();
    this.currentUser       = User.getCurrentUser();
    this.$state=$state;
    this.getMyMessages()
  }

  getMyMessages() {
    this.Message.getMyMessages(this.currentUser.objectId).then((messages)=> {
      this.myMessages = messages;
    })
  }

  openMessage(message) {
    if(!message.message.isRead){
      message.parseMessage.set("isRead", true);
      message.parseMessage.save();
    }
    this.$state.go('messages.message',{message:message});
  }
}
