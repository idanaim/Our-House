import { breakfilter } from './breakfilter';
import angular from 'angular';

export default angular.module('OurHouse.filters', [])
  .filter('breakfilter', breakfilter);
