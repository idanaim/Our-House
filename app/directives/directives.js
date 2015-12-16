import angular from 'angular';
import { ifEnv } from 'directives/if-env';

export default angular.module('OurHouse.directives', [])
  .directive('ifEnv', ifEnv);
