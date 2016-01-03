export class Message {

  // @ngInject
  constructor($q, ParseApi) {
    this.$q       = $q;
    this.Parse    = ParseApi.getParse();
    this.Messages = this.Parse.Object.extend('Messages');
  }

  setNewMessage(message) {
    let newMessage = new this.Messages();
    newMessage.set("buildingId", message.buildingId);
    newMessage.set("title", message.title);
    newMessage.set("content", message.content);
    newMessage.set("fromUserId", message.fromUserId);
    newMessage.set("toUserId", message.toUserId);
    newMessage.set("type", message.type);
    newMessage.set("isRead", false);
    return newMessage.save();
  }
  getMyMessages(userId){
    let deferred = this.$q.defer();
    let messages = [];
    let query    = new this.Parse.Query(this.Messages);
    query.equalTo("toUserId", userId);
    query.find({
      success: (_messages)=> {
        for (var i = 0; i < _messages.length; i++) {
          messages.push({message:_messages[i]._toFullJSON(),parseMessage:_messages[i]});
        }
        deferred.resolve(messages);
      },
      error:()=>{

      }
    });

    return deferred.promise;
  }

  getMessageById(messageId){
    let deferred = this.$q.defer();
    var query    = new this.Parse.Query(this.Messages);
    query.get(messageId,{
      success: (message)=> {
        deferred.resolve({parseMessage:message,message:message._toFullJSON()});

      },
      error: (error)=> {
      //  alert("Error: " + error.code + " " + error.message);
      }
    });
    return deferred.promise;
  }
}
