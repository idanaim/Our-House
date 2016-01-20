export class DashboardController {

  // @ngInject
  constructor($q, MonthPaid, Building, CALENDER_ENG, User, Expenses, BuildingPosts, Modal) {
    this.BuildingPosts = BuildingPosts;
    this.CALENDER_ENG  = CALENDER_ENG;
    this.Expenses      = Expenses;
    this.MonthPaid     = MonthPaid;
    this.User          = User;
    this.$q            = $q;
    this.Building      = Building;
    this.Apartments    = [];
    this.total         = 0;
    this.showList      = false;
    this.Modal         = Modal;
    this.currentUser   = User.getCurrentUser();
    this.buildingId    = this.currentUser.buildingId;
    this.getDashboardData();

    this.barChart = {

      labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
      data: [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
      ],
      series: ["Series A", "Series B"]
    }
  }

  getDashboardData() {
    this.BuildingPosts.getAllPostByBuildingId(this.buildingId).then((posts)=> {
      this.buildingPosts = posts;
    });
    this.User.getAlUserByBuildingId(this.buildingId).then((users)=> {
      this.Apartments = users;
    });

    this.Building.getBuildingById(this.buildingId).then((building)=> {
      this.currentBuilding = building.building;
      this.getTotalBuildingAmount().then(()=> {
        this.Expenses.getAllExpensesByBuildingId(this.buildingId).then((Expenses)=> {
          this.buildingExpenses = Expenses;
          this.calculateExpanses();
          this.createPieData();
        });
      });
    });
  }

  getTotalBuildingAmount() {
    let deferred        = this.$q.defer();
    let jackpot         = this.currentBuilding.jackpot;
    this.totalMoneyPaid = 0;
    let calenderKeys    = _.keys(this.CALENDER_ENG);
    this.MonthPaid.getAllPaymentByBuildingId(this.buildingId)
      .then((apartmentsMap)=> {
        let mapKeys = _.keys(apartmentsMap);
        _.forEach(mapKeys, (key)=> {
          let apartmentMonth = apartmentsMap[key].month;
          let monthKeys      = _.keys(apartmentMonth);
          _.forEach(monthKeys, (month)=> {
            if (apartmentMonth[month] && this.CALENDER_ENG[month]) {
              this.totalMoneyPaid += jackpot;
            }

          });
        });
      });
    deferred.resolve(this.totalMoneyPaid);
    return deferred.promise;
  }

  calculateExpanses() {
    let allExpenses = 0;
    this.buildingExpenses.forEach((expense)=> {
      allExpenses += expense.amount;
    });
    this.total      = this.totalMoneyPaid - allExpenses;
  }

  taggleList() {
    return this.showList =! this.showList;
  }

  createPieData() {
    this.pie = {
      type: 'Pie',
      labels: [],
      data: [],
      chartColours: []
    };

    this.buildingExpenses.forEach((e)=> {
      this.pie.labels.push(e.expenseOn);
      this.pie.data.push(e.amount);
    });
  }
}
