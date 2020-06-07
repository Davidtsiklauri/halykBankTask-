import template from './login.component.html';
import './login.component.scss';
 

const LoginComponent = {
  template,
  controller: ['$scope', 'global','$location', ($scope, global, $location) =>{
      $scope.user = { name: '', password: '' };
      $scope.isSubmitted = false;
      $scope.isCredentialInvalid = false;

      $scope.onSubmit = () => {
          $scope.isSubmitted = true;
          if($scope.user.name && $scope.user.password) {
              // global.registerUser($scope.user.name, $scope.user.password);
              if( global.getRegisteredUserCreditinials() && 
                  global.getRegisteredUserCreditinials().name === $scope.user.name && 
                  global.getRegisteredUserCreditinials().password === $scope.user.password 
                ) {
                    global.login($scope.user);
                    $location.path('/dashboard');    
              }else {
                 return $scope.isCredentialInvalid = true;
              }
                   
          };
      };
  }]
};

export default LoginComponent;