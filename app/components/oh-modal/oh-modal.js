// Modals services
import { Modal }                     from 'components/oh-modal/services/modal';
import { AdminPostController }       from 'components/oh-modal/components/admin-post/admin-post';
import { UserManagementController }  from 'components/oh-modal/components/user-management/user-management';
import { SendMessageController }  from 'components/oh-modal/components/send-message/send-message';
import { ReportExpenseController }  from 'components/oh-modal/components/report-expense/report-expense';
let controllers = {
  AdminPostController,
  UserManagementController,
  SendMessageController,
  ReportExpenseController,

};

export default angular.module('ohModal.module', [])
  .service('Modal', Modal)
  .controller(controllers)
