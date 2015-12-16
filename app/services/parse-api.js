export class ParseApi {

  // @ngInject
  constructor(Parse) {
    this.Parse = Parse;
    this.Parse.initialize("ttSTSJSt7uAF1SWXqpvAMpzSyZb1zf2SNodmsOBO", "edqqAIN5cVnO67bkKBtL33RMUiEoUnGBHitEJWT6");
  }
  getParse(){
    return this.Parse;
  }
}
