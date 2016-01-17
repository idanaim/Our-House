export class MonthPaid {

  // @ngInject
  constructor($q, ParseApi, CALENDER_ENG) {
    this.$q           = $q;
    this.CALENDER_ENG = CALENDER_ENG;
    this.Parse        = ParseApi.getParse();
    this.MonthPaid    = this.Parse.Object.extend('MonthPaid');
  }

  getAllPaymentByBuildingId(buildingId) {
    let deferred      = this.$q.defer();
    let apartmentsMap = {};
    var query         = new this.Parse.Query(this.MonthPaid);
    query.equalTo("buildingId", buildingId);
    query.find({
      success: (apartments)=> {
        for (var i = 0; i < apartments.length; i++) {
          apartmentsMap[apartments[i]._toFullJSON().apartmentNumber] = {
            monthParse: apartments[i],
            month: apartments[i]._toFullJSON()
          }
        }

        deferred.resolve(apartmentsMap);
      },
      error: ()=> {

      }
    });
    return deferred.promise;
  }

  getPaymentByBuildingIdAndAprtNum() {}

  savePaymentsPerUser(apartment) {
    let monthPaid = new this.MonthPaid();
    _.forEach(_.keys(apartment.months), (month)=> {
      monthPaid.set(this.CALENDER_ENG[month], apartment.months[month]);
    });
    monthPaid.set('apartmentNumber', apartment.number);
    monthPaid.set('buildingId', apartment.buildingId);
    monthPaid.save();
  }
}
