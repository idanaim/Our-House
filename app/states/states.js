import { DashboardController } from './dashboard/dashboard';
import angular            from 'angular';
import { HomeController } from 'states/home/home';

export default angular.module('OurHouse.controllers', [])
  .controller('HomeController', HomeController)
  .controller('DashboardController', DashboardController);
