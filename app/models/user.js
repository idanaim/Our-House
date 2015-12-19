export class User {

  // @ngInject
  constructor($state, $q, ParseApi) {
    this.$q    = $q;
    this.Parse = ParseApi.getParse();

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
      error: ()=> {

      }
    });

    return deferred.promise;
  }

  getTheBuildingAdmin(buildingId) {
    let deferred = this.$q.defer();
    let userList = [];
    let query    = new this.Parse.Query(this.Parse.User);
    query.equalTo("buildingId", buildingId);  // find all the women
    query.equalTo("admin", true);  // find all the women
    query.find({
      success: (users)=> {
        for (var i = 0; i < users.length; i++) {
          userList.push(users[i]._toFullJSON());
        }
        deferred.resolve(userList);
      },
      error: ()=> {

      }
    });

    return deferred.promise;
  }

signUp(newUser)
{
  let deferred = this.$q.defer();
  let user     = new this.Parse.User();
  user.set("username", newUser.email);
  user.set("password", newUser.password);
  user.set("email", newUser.email);
  user.set("admin", newUser.admin);
  user.set("name", newUser.name);
  user.set("lastname", newUser.lastName);
  user.set("pending", newUser.pending);
  user.set("phone", newUser.phone);
  user.set("apartmentNumber", newUser.apartmentNumber);
  user.set("buildingId", newUser.buildingId);

  user.signUp(null, {
    success: function (user) {
      deferred.resolve(user._toFullJSON());
    },
    error: function (user, error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }
  });
  return deferred.promise;
}

login(userLogin)
{
  let deferred = this.$q.defer();
  this.Parse.User.logIn(userLogin.username, userLogin.password, {
    success: ((user)=> {
      if (user._toFullJSON().pending || !user._toFullJSON().approved) {
        this.logout();
        deferred.resolve({ pending: true });
        alert('מחכה לאישור');
      }
      deferred.resolve(user);
    }),
    error: ((user, error)=> {
      // The login failed. Check error to see why.
    })
  });
  return deferred.promise;
}

getCurrentUser()
{
  return this.currentUser;
}

logout()
{
  this.Parse.User.logOut();
}
}
