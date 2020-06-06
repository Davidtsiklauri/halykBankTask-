import angular from 'angular';
import RegisterComponent from './register/register.component';
import LoginComponent from '../register/login/login.component';


const ComponentsModule = angular.module('app.register', [])

ComponentsModule.component('appRegister', RegisterComponent);
ComponentsModule.component('appLogin', LoginComponent);

export default ComponentsModule;
        