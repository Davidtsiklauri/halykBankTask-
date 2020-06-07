import template from './dashboard.component.html';
import './dashboard.component.scss';
 

const DashboardComponent = {
  template,
  controller:  ['$scope', 'global', '$location', 'utilitiesService', function($scope, global, $location, utilitiesService ){
    $scope.bankAccounts = []; 
    $scope.userName  = utilitiesService.upperCaseFirstCharInString( global.getUser().name );

    const vm = this;

    vm.$onInit = () => {
          $scope.bankAccounts = vm.bankAccounts;
    }
    
    $scope.logOut = () => {
        global.logOut();
        $location.path('/register');    
    };

  }],
  controllerAs: 'vm',
  bindings: {
    bankAccounts: '<'
  }
};

export default DashboardComponent;