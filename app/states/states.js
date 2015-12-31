import { MessagesAllMessagesController } from './messages/all-messages/all-messages';
import { MessagesMessageController } from './messages/message/message';
import { MessagesController } from './messages/messages';
import { ProfessionalController } from './professional/professional';
import { DashboardController } from './dashboard/dashboard';
import angular            from 'angular';
import { HomeController } from 'states/home/home';

export default angular.module('OurHouse.controllers', [])
  .controller('HomeController', HomeController)
  .controller('DashboardController', DashboardController)
  .controller('ProfessionalController', ProfessionalController)
  .controller('MessagesController', MessagesController)
  .controller('MessagesMessageController', MessagesMessageController)
  .controller('MessagesAllMessagesController', MessagesAllMessagesController);
