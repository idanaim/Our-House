export class Expenses {

  // @ngInject
  constructor($q, ParseApi) {
    this.$q        = $q;
    this.Parse     = ParseApi.getParse();
    this.Expenses = this.Parse.Object.extend('Expenses');
  }
  getAllExpensesByBuildingId(buildingId){
    let deferred = this.$q.defer();
    let expneseList = [];
    let query    = new this.Parse.Query(this.Expenses);
    query.equalTo("buildingId", buildingId);
    query.find({
      success: (expenses)=> {
        for (var i = 0; i < expenses.length; i++) {
          expneseList.push(expenses[i]._toFullJSON());
        }
        deferred.resolve(expneseList);
      },
      error:()=>{

      }
    });

    return deferred.promise;
  }
  getExpenseById(id){

  }
}
