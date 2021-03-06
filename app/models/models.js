import { Forum } from './forum';
import { MonthPaid } from './month-paid';
import { Professionals } from './professionals';
import { Message } from './message';
import { Notifications } from './notifications';
import { BuildingPosts } from './building-posts';
import { Expenses } from './expenses';
import { User } from './user';
import { Building } from './building';
import angular from 'angular';

export default angular.module('OurHouse.models', [])
  .service('Building', Building)
  .service('User', User)
  .service('Expenses', Expenses)
  .service('BuildingPosts', BuildingPosts)
  .service('Notifications', Notifications)
  .service('Message', Message)
  .service('Professionals', Professionals)
  .service('MonthPaid', MonthPaid)
  .service('Forum', Forum);
