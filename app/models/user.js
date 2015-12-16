export class User {

  // @ngInject
  constructor($state, $q, ParseApi) {
    this.$q    = $q;
    this.Parse = ParseApi.getParse();
    //this.currentUser = this.Parse.User.current();
    //if (!this.currentUser) {
    //  $state.go('login');
    //}
    // this.User = this.Parse.User();
  }

  getAlUserByBuildingId(buildingId) {
    let deferred = this.$q.defer();
    let userList = [];
    let query    = new this.Parse.Query(this.Parse.User);
    query.equalTo("buildingId", buildingId);  // find all the women
    query.find({
      success: (users)=> {
        for (var i = 0; i < users.length; i++) {
          userList.push(users[i]._toFullJSON());
        }
        deferred.resolve(userList);
      },
      error:()=>{

      }
    });

      return deferred.promise;
  }

  signUp(newUser) {

    this.User.set("username", newUser.email);
    this.User.set("password", newUser.password);
    this.User.set("email", newUser.email);

    // other fields can be set just like with Parse.Object
    this.User.set("phone", newUser.phone);

    this.User.signUp(null, {
      success: function (user) {
        console.log(user);
      },
      error: function (user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }

  login(user) {
    this.User.logIn(user.username, user.password, {
      success: function (user) {
        console.log(user)
      },
      error: function (user, error) {
        // The login failed. Check error to see why.
      }
    });
  }

  getCurrentUser() {
    return this.currentUser;
  }

  logout() {
    this.User.logOut();
  }
}
