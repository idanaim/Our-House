export class BuildingPosts {

  // @ngInject
  constructor($q, ParseApi) {
    this.$q            = $q;
    this.Parse         = ParseApi.getParse();
    this.BuildingPosts = this.Parse.Object.extend('BuildingPosts');
  }

  getAllPostByBuildingId(buildingId) {
    let deferred = this.$q.defer();
    let postList = [];
    let query    = new this.Parse.Query(this.BuildingPosts);
    query.equalTo("buildingId", buildingId);  // find all the women
    query.find({
      success: (posts)=> {
        for (var i = 0; i < posts.length; i++) {
          postList.push(posts[i]._toFullJSON());
        }
        deferred.resolve(postList);
      },
      error: ()=> {

      }
    });

    return deferred.promise;
  }
  setNewPost(post) {
    let newPost = new this.BuildingPosts();
    newPost.set("buildingId", post.buildingId);
    newPost.set("userId", post.userId);
    newPost.set("title", post.title);
    newPost.set("body", post.body);
    newPost.save(null, {
      success: function (newpost) {
        // Execute any logic that should take place after the object is saved.
        alert('New object created with objectId: ' + newpost.id);
      },
      error: function (gameScore, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });
  }
}
