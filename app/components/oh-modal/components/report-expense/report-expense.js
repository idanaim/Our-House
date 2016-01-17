/**
 * Created by idannaim on 03/01/16.
 */
export class ReportExpenseController {

  /*@ngInject*/
  constructor($uibModalInstance, Professionals, Expenses, User) {
    this.ProfessionalsData = Professionals;
    this.Expenses          = Expenses;
    this.currentUser       = User.getCurrentUser();
    this.$uibModalInstance = $uibModalInstance;
    this.getProfessionals();
  }

  getProfessionals() {
    this.ProfessionalsData.getProfessionals().then((pros)=> {
      this.professionals = pros;
    })
  }

  sendReport(report) {
    report.buildingId = this.currentUser.buildingId;
    report.typeId     = parseInt(report.typeId);
    this.Expenses.setExpense(report);
    this.$uibModalInstance.close();
  }
}