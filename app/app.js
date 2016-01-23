/* globals __dirname */

import angular from 'angular';

import 'assets/stylesheets/application.scss';

import Models     from 'models/models';
import Services   from 'services/services';
import Directives from 'directives/directives';
import Components from 'components/components';
import Filters    from 'filters/filters';
import Config     from 'config/config';
import Routes     from 'config/routes/routes';
import States     from 'states/states';
import Constants     from 'constants/constants';


//vendors
import 'angular-sanitize';
import 'angular';
import 'jquery';
import 'lodash';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap'
import 'material-design-lite/material.js';
import 'material-design-lite/material.css';
import 'material-design-icons';
import 'angular-chart.js';
import 'angular-animate';
import 'angular-chart.js/dist/angular-chart.css';
import "angular-carousel/dist/angular-carousel.css";
import 'parse';
import 'angular-parse';
import 'angular-touch';
import 'angular-carousel';
// Import all html files to put them in $templateCache
// If you need to use lazy loading, you will probably need
// to remove these two lines and explicitly require htmls
const templates = require.context(__dirname, true, /\.html$/);

templates.keys().forEach(templates);

angular.module('OurHouse', [
  Models.name,
  Services.name,
  Directives.name,
  Components.name,
  Filters.name,
  Config.name,
  Routes.name,
  States.name,
  Constants.name,
  'chart.js',
  'ui.bootstrap',
  'ngAnimate',
  'ngParse',
  'angular-carousel',
  'ngSanitize',

]);

angular.element(document).ready(() =>
  angular.bootstrap(document, ['OurHouse'], {
    strictDi: true
  }));
