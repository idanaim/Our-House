import { registrationBuildingRoutes } from './registration-building';
import { messagesRoutes } from './messages';
import { professionalRoutes } from './professional';
import { dashboardRoutes } from './dashboard';
import angular from 'angular';
import 'angular-ui-router';

import { homeRoutes } from 'config/routes/home';
import { staticRoutes } from 'config/routes/static';

const defaultRoute = /* @ngInject */ ($urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');
};

export default angular.module('OurHouse.routes', ['ui.router'])
  .config(registrationBuildingRoutes)
  .config(messagesRoutes)
  .config(professionalRoutes)
  .config(dashboardRoutes)
  .config(defaultRoute)
  .config(homeRoutes)
  .config(staticRoutes);
