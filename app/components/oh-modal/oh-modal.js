
// Modals services
import { Modal }            from 'components/oh-modal/services/modal';

import { AdminPostController }  from 'components/oh-modal/components/admin-post/admin-post';
import { UserManagementController }  from 'components/oh-modal/components/user-management/user-management';
let controllers = {
  AdminPostController,
  UserManagementController

};

export default angular.module('ohModal.module', [])
  .service('Modal', Modal)
  .controller(controllers)
