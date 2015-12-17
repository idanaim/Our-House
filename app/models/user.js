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
    let deferred = this.$q.defer();
    let user= new this.Parse.User();
    user.set("username", newUser.email);
    user.set("password", newUser.password);
    user.set("email", newUser.email);
    user.set("admin", newUser.admin);
    user.set("phone", newUser.phone);
    user.set("apartmentNumber", newUser.apartmentNumber);
    user.set("buildingId", newUser.buildingId);

    user.signUp(null, {
      success: function (user) {
        deferred.resolve(user);
      },
      error: function (user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });
    return deferred.promise;
  }

  login(userLogin) {
    let deferred = this.$q.defer();
    console.log("userLogin",userLogin);
    this.Parse.User.logIn(userLogin.username, userLogin.password, {
      success: function (user) {
        deferred.resolve(user);
      },
      error: function (user, error) {
        // The login failed. Check error to see why.
      }
    });
    return deferred.promise;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  logout() {
    this.Parse.User.logOut();
  }
}
