/**
 * Created by idannaim on 17/12/15.
 */
export class UserManagementController {
  /*@ngInject*/
  constructor($uibModalInstance, User, Building, ParseApi, Notifications) {
    this.Parse             = ParseApi.getParse();
    this.Building          = Building;
    this.User              = User;
    this.Notifications     = Notifications;
    this.$uibModalInstance = $uibModalInstance;

  }

  toggleRegister() {
    this.register = !this.register;
  }

  toggleExist(exsit) {
    this.existBuilding = exsit;
    this.newBuliding   = !exsit;
  }

  sendRequestFromAdmin(request) {
    this.Building.getBuildingByAddress({
      address: request.address,
      city: request.city
    }).then((building)=> {
      request.admin      = false;
      request.pending    = true;
      request.approved   = false;
      request.buildingId = building.objectId;
      this.User.signUp(request).then((user)=> {
        this.User.getTheBuildingAdmin(building.objectId).then((admins)=> {
          this.Notifications.setNotificationRequest({
            "fromUserId": user.objectId,
            "fromUsername": user.name,
            "fromUserLastName": user.lastname,
            "toUserId": admins[0].objectId,
            "apartmentNumber":user.apartmentNumber
          }).then(()=>  this.$uibModalInstance.close());
        })

      });
    })

  }

  createNewBuilding(newUser) {
    let newBuilding = {
      city: newUser.city,
      address: newUser.address,
      apartmentsNumber: newUser.apartmentsNumber
    };
    this.Building.createNewBuildings(newBuilding).then((data)=> {
      console.log(data);
      newUser.buildingId = data.id;
      newUser.admin      = true;
      newUser.pending    = false;
      request.approved   = true;
      this.User.signUp(newUser).then((user)=> {

      });
    })
  }

  login(user) {
    this.User.login(user).then((data)=> {
      console.log(data);
      this.$uibModalInstance.close(data)
    })
  }
}