/**
 * Created by idannaim on 17/12/15.
 */
export class UserManagementController {
  /*@ngInject*/
  constructor($uibModalInstance, User, Building, ParseApi) {
    this.Parse             = ParseApi.getParse();
    this.Building          = Building;
    this.User              = User;
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
    console.log(JSON.stringify(request));
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
      newUser.admin = true;
      this.User.signUp(newUser).then((user)=> {

      })
    })
  }

  login(user) {
    this.User.login(user).then((data)=> {
      console.log(data);
      this.$uibModalInstance.close(data)
    })
  }
}