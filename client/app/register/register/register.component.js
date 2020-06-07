import template from './register.component.html';
import './register.component.scss';
 

const RegisterComponent = {
  template,
  controller: ['$scope', 'global','$location', ($scope, global, $location) =>{
    $scope.user = { name: '', password: '' };
    $scope.isSubmitted = false;
    $scope.isCredentialInvalid = false;

    $scope.onSubmit = () => {
        $scope.isSubmitted = true;
        if($scope.user.name && $scope.user.password) {
            // global.registerUser($scope.user.name, $scope.user.password);
            global.registerUser($scope.user);
            $location.path('/login');    
        };
    };
  }]
};

export default RegisterComponent;