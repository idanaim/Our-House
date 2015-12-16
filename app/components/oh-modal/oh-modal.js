
// Modals services
import { Modal }            from 'components/oh-modal/services/modal';

import { AdminPostController }  from 'components/oh-modal/components/admin-post/admin-post';
let controllers = {
  AdminPostController,

};

export default angular.module('ohModal.module', [])
  .service('Modal', Modal)
  .controller(controllers)
