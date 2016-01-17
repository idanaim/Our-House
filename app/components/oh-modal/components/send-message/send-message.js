/**
 * Created by idannaim on 28/12/15.
 */
export class SendMessageController {
  /*@ngInject*/
  constructor($uibModalInstance, Notifications, User, Message, ParseApi) {
    this.User          = User;
    this.Message       = Message;
    this.Notifications = Notifications;
    this.Parse         = ParseApi.getParse();
    this.message       = {};
    this.modalInstance = $uibModalInstance;
    this.currentUser       = User.getCurrentUser();
    this.getAllRelevantUsers()
  }

  cancel() {
    this.modalInstance.close();
  }

  sendNotification(messageId,toUserId) {
    let notification = {
      "messageId": messageId,
      "fromUserId": this.currentUser.objectId,
      "fromUsername": this.currentUser.name,
      "fromUserLastName": this.currentUser.lastname,
      "toUserId": toUserId,
      "readByUser": false,
      "type": this.message.type,
      "apartmentNumber": this.currentUser.apartmentNumber
    }
    this.Notifications.setNotification(notification)
  }

  send() {

    if (!this.message.toSend) {
      this.User.getAdminByBuildingId(this.currentUser.buildingId).then((user)=> {
        this.save(user.objectId)
      });
    }
    else{
      this.save(this.message.toSend)
    }
  }
  save(toUserId){
    this.message.buildingId = this.currentUser.buildingId;
    this.message.fromUserId = this.currentUser.objectId;
    this.message.toUserId   = toUserId;
    this.message.type       = parseInt(this.message.type);
    this.message.name       = this.currentUser.name;
    this.message.lastname   = this.currentUser.lastname;
    this.Message.setNewMessage(this.message).then((message)=> {

      alert('new message sent');
      this.sendNotification(message._toFullJSON().objectId,toUserId);
      this.modalInstance.close();
    });
  }

  getAllRelevantUsers() {
    this.User.getAlUserByBuildingId(this.currentUser.buildingId).then((users)=> {
      this.Apartments = users;
    });
  }
}