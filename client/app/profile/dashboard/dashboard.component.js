import template from './dashboard.component.html';
import './dashboard.component.scss';
 

const LoginComponent = {
  template,
  controller:  ['$scope', function($scope){
    $scope.greeting = 'Hola!';
  }]
};

export default LoginComponent;