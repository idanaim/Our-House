export class DashboardController {

  // @ngInject
  constructor(ParseApi, Building, User, Expenses, BuildingPosts,Modal) {
    this.BuildingPosts = BuildingPosts;
    this.Expenses      = Expenses;
    this.User          = User;
    this.Building      = Building;
    this.Apartments    = [];
    this.total         = 0;
    this.Modal= Modal;
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
  openAdminPost(){
    this.Modal.open('AdminPost')
  }

  getDashboardData() {
    this.BuildingPosts.getAllPostByBuildingId('9hlOUsQd9K').then((posts)=> {
      this.buildingPosts = posts;
    });
    this.User.getAlUserByBuildingId('9hlOUsQd9K').then((users)=> {
      this.Apartments = users;
    });
    this.Building.getBuildingById('9hlOUsQd9K').then((building)=> {
      this.currentBuilding = building;
      this.Expenses.getAllExpensesByBuildingId('9hlOUsQd9K').then((Expenses)=> {
        this.buildingExpenses = Expenses;
        this.calculateExpanses();
        this.createPieData();
      });
    });
  }

  calculateExpanses() {
    let allExpenses = 0;
    this.buildingExpenses.forEach((expense)=> {
      allExpenses += expense.amount;
    });
    this.total      = this.currentBuilding.jackpot - allExpenses;
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
