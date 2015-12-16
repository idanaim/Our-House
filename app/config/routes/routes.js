import { dashboardRoutes } from './dashboard';
import angular from 'angular';
import 'angular-ui-router';

import { homeRoutes } from 'config/routes/home';
import { staticRoutes } from 'config/routes/static';

const defaultRoute = /* @ngInject */ ($urlRouterProvider) => {
  $urlRouterProvider.otherwise('/dashboard');
};

export default angular.module('OurHouse.routes', ['ui.router'])
  .config(dashboardRoutes)
  .config(defaultRoute)
  .config(homeRoutes)
  .config(staticRoutes);
