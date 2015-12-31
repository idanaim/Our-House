export class Notifications {

  // @ngInject
  constructor($q, ParseApi) {
    this.$q        = $q;
    this.Parse     = ParseApi.getParse();
    this.Notifications = this.Parse.Object.extend('Notifications');
  }
  setNotification(request){
    let notification =new this.Notifications();
    notification.set("messageId", request.messageId);
    notification.set("fromUserId", request.fromUserId);
    notification.set("fromUsername", request.fromUsername);
    notification.set("fromUserLastName", request.fromUserLastName);
    notification.set("toUserId", request.toUserId);
    notification.set("isRequest", true);
    notification.set("readByUser", false);
    notification.set("type", request.type);
    notification.set("apartmentNumber", request.apartmentNumber);
    return notification.save();
  }
  getNotifications(userId){
    let notesList=[];
    let deferred = this.$q.defer();
    let query    = new this.Parse.Query(this.Notifications);
    query.equalTo("toUserId", userId);
    query.find({
      success: (notes)=> {
        notes.forEach((note)=>{
          notesList.push({note:note._toFullJSON(),parseNote:note});
        })
        deferred.resolve(notesList);

      },
      error: function (building, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });
    return deferred.promise;

  }
  deleteNotifictionsByMessageId(messageId){

  }
}
