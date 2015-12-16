class sidebarController {
  // @ngInject
  constructor($log, $scope) {

    $scope.selectedMenu     = 'dashboard';
    $scope.collapseVar      = 0;
    $scope.multiCollapseVar = 0;

    $scope.check = function (x) {

      if (x == $scope.collapseVar) {
        $scope.collapseVar = 0;
      } else {
        $scope.collapseVar = x;
      }
    };

    $scope.multiCheck = function (y) {

      if (y == $scope.multiCollapseVar) {
        $scope.multiCollapseVar = 0;
      } else {
        $scope.multiCollapseVar = y;
      }
    };
  }
}

export function sidebar() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/sidebar/sidebar.html',
    controller: sidebarController,
    controllerAs: 'sidebar',
    bindToController: true
  };
}
