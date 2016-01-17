export class Professionals {

  // @ngInject
  constructor($q, ParseApi) {
    this.$q        = $q;
    this.Parse     = ParseApi.getParse();
    this.Professionals = this.Parse.Object.extend('professionalType');
  }

  getProfessionals(){
    let deferred = this.$q.defer();
    let professionalList = [];
    let query    = new this.Parse.Query(this.Professionals);
    query.find({
      success: (professionals)=> {
        for (var i = 0; i < professionals.length; i++) {
          professionalList.push(professionals[i]._toFullJSON());
        }
        deferred.resolve(professionalList);
      },
      error:()=>{

      }
    });

    return deferred.promise;
  }
}
