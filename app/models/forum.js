export class Forum {

  // @ngInject
  constructor($q, ParseApi) {
    this.$q    = $q;
    this.Parse = ParseApi.getParse();
    this.Forum = this.Parse.Object.extend('Forum');
  }

  getForumByBuildingId(buildingId) {
    let deferred  = this.$q.defer();
    let chatsList = [];
    let query     = new this.Parse.Query(this.Forum);
    query.equalTo("buildingId", buildingId);
    query.find({
      success: (chats)=> {
        for (var i = 0; i < chats.length; i++) {
          chatsList.push(chats[i]._toFullJSON());
        }
        deferred.resolve(chatsList);
      },
      error: ()=> {
      }
    });
    return deferred.promise;
  }

  sendMessage(message) {
    let Forum = new this.Forum();
    Forum.set("buildingId", message.buildingId);
    Forum.set("message", message.message);
    Forum.set("userId", message.userId);
    Forum.set("lastname", message.lastname);
    Forum.set("firstname", message.firstname);
    return Forum.save();
  }
}
