import { ohNotifications } from './oh-notifications/oh-notifications';
import { ohHeader } from './oh-header/oh-header';
import  ohModal  from './oh-modal/oh-modal';
import { sidebar } from './sidebar/sidebar';
import { headerNotification } from './header-notification/header-notification';
import { ohForm } from './oh-form/oh-form';
import angular from 'angular';
import 'angular-ui-bootstrap';
//import 'bootstrap-sass';

export default angular.module('OurHouse.components', [
  ohModal.name
])
  .directive('ohForm', ohForm)
  .directive('headerNotification', headerNotification)
  .directive('sidebar', sidebar)
  .directive('ohModal', ohModal)
  .directive('ohHeader', ohHeader)
  .directive('ohNotifications', ohNotifications);
