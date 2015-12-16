export class Building {

  // @ngInject
  constructor($q, ParseApi) {
    this.$q        = $q;
    this.Parse     = ParseApi.getParse();
    this.Buildings = this.Parse.Object.extend('Buildings');
  }

  getBuildingById(id) {
    let deferred = this.$q.defer();

    let query = new this.Parse.Query(this.Buildings);
    query.get(id).then((building)=> {
      deferred.resolve(building._toFullJSON());
    });

    return deferred.promise;
  }

  updateBuilding(building) {
    this.getBuildingById(building.objectId).then(()=> {

    });
  }

  createNewBuildings(buliding) {
    let newBuilding = new this.Buildings();
    newBuilding.set('city', buliding.city);
    newBuilding.set('address', buliding.address);
    newBuilding.set('apartmentsNumber', buliding.apartmentsNumber);
    return newBuilding.save();
  }
}
