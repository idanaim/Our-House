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
  setExpense(expense){
    let expenses = new this.Expenses();
    expenses.set("typeId", expense.typeId);
    expenses.set("buildingId", expense.buildingId);
    expenses.set("amount", expense.amount);
    expenses.set("expenseOn", expense.expenseOn);
    expenses.set("explain", expense.explain);
    expenses.set("receipt", expense.receipt);
    return expenses.save();
  }
}
