export class MessagesAllMessagesController {

  // @ngInject
  constructor($state,Message, ParseApi,User,Modal) {
    this.Message     = Message;
    this.Parse       = ParseApi.getParse();
    this.currentUser       = User.getCurrentUser();
    this.$state=$state;
    this.Modal=Modal;
    this.getMyMessages()
  }

  getMyMessages() {
    this.Message.getMyMessages(this.currentUser.objectId).then((messages)=> {
      this.myMessages = messages;
    })
  }
  refresh(){
    this.getMyMessages();
  }

  sendMessage() {
    this.Modal.open('SendMessage');
  }

  openMessage(message) {
    if(!message.message.isRead){
      message.parseMessage.set("isRead", true);
      message.parseMessage.save();
    }
    this.$state.go('messages.message',{messageId:message.message.objectId});
  }
}
