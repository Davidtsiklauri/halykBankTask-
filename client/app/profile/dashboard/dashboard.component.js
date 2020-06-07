import template from './dashboard.component.html';
import './dashboard.component.scss';
 

const LoginComponent = {
  template,
  controller:  ['$scope', 'global', function($scope, global){
    $scope.greeting = 'Hola!';
    global.registerUser('david','tsiklauri');
    // console.log(global.isAuthenticated());
  }]
};

export default LoginComponent;