export class HomeController {

  // @ngInject
  constructor(ParseApi, Building, User) {
    this.User=User;
    this.Apartments = [];
    this.getDashboardData();
    //});

    this.pie      = {
      labels: ["חשמל", "מנקה", "גנן"],
      data: [300, 500, 100]
    };
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
    this.User.getAlUserByBuildingId('9hlOUsQd9K').then((users)=> {
      console.log(users);
      this.Apartments = users;
    });
  }
}
