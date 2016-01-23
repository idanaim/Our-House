export class RegistrationBuildingController {

  // @ngInject
  constructor($state, Building, User, CALENDER_HEB, MonthPaid, CALENDER_ENG) {
    this.$state         = $state;
    this.CALENDER_HEB   = CALENDER_HEB;
    this.CALENDER_ENG   = CALENDER_ENG;
    this.Building       = Building;
    this.MonthPaid      = MonthPaid;
    this.showContiueBtn = true;
    this.User           = User;
    this.buildingId     = User.getCurrentUser().buildingId;
    this._getData();
  }

  _getData() {
    this.Building.getBuildingById(this.buildingId)
      .then((b)=> {
        this.currentBuilding = b;
        this.MonthPaid.getAllPaymentByBuildingId(this.buildingId)
          .then((apartMonthsMap)=> {
            this.apartMonthsMap = apartMonthsMap;
            this._prepareApartments();
          });

      });
  }

  _prepareApartments() {
    this.apartmentList = [];
    if (this.apartMonthsMap && !_.isEmpty(this.apartMonthsMap)) {
      let aprtNumbers = _.keys(this.apartMonthsMap);
      _.forEach(aprtNumbers, (num)=> {
        this.apartmentList.push({
          number: num,
          months: this._convertMonthToNumbers(this.apartMonthsMap[num].month) || {}
        });
      })
    }
    else {
      for (let i = 1; this.currentBuilding.building.apartmentsNumber > i; i++) {
        this.apartmentList.push({ number: i, months: {} });
      }
    }
  }

  goToDashBoard() {
    this.$state.go('dashboard');
  }

  save() {
    _.forEach(this.apartmentList, (apartment)=> {
      if (this.currentBuilding.building.jackpot != this.currentBuilding.parseBuilding._toFullJSON().jackpot) {
        this._saveBuildingJackpot();
      }
      apartment.buildingId = this.buildingId;
      if (this.apartMonthsMap[apartment.number]) {
        this.updateApartmentPaid(this.apartMonthsMap[apartment.number].monthParse, apartment)
      }
      else {
        this.MonthPaid.savePaymentsPerUser(apartment);
      }
    });
    if (this.User.getCurrentUser().firstTime) {
      this._updateUserVisit();
    }
  }

  markAll(num) {
    let currentApartment = _.find(this.apartmentList, { number: num });

    for (let index = 1; index < 13; index++) {
      currentApartment.months[index] = !currentApartment.markAll;
    }
    currentApartment.markAll = !currentApartment.markAll;

  }

  _updateUserVisit() {
    let parseUser = this.User.getCurrentParseUser();
    parseUser.set("firstTime", false);
    parseUser.save();
  }

  _saveBuildingJackpot() {
    let parseBuilding = this.currentBuilding.parseBuilding;
    parseBuilding.set('jackpot', parseInt(this.currentBuilding.building.jackpot));
    parseBuilding.save();
  }

  updateApartmentPaid(monthParse, apartment) {

    _.forEach(_.keys(apartment.months), (month)=> {
      monthParse.set(this._getMonth(month), apartment.months[month]);

    });
    monthParse.save();
  }

  _getMonth(month) {
    for (let key in this.CALENDER_ENG) {
      if (this.CALENDER_ENG[key] == parseInt(month)) {
        return key;
      }
    }
  }

  _convertMonthToNumbers(months) {
    let obj = {};
    _.forEach(months, (_value, _key)=> {
      _.forEach(this.CALENDER_ENG, (value, key)=> {
        if (_key == key) {
          obj[value] = _value;
        }
      })
    });
    return obj;
  }
}
