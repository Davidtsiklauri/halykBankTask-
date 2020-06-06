import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'bootstrap-css-only';
import 'normalize.css';
import appComponent from './app.component';
import  'angular-ui-router-css';
import registerModule from './register/register.module';
import profileModule from './profile/profile.module';
import SharedModule from './shared/shared.module';


angular.module('app', [
   uiRouter,
   registerModule.name,
   profileModule.name,
   SharedModule.name
]).component('app', appComponent)
.config(['$stateProvider', '$urlRouterProvider',
    function config($stateProvider, $urlRouterProvider) {

      const routes = [
         { 
            name: 'register', 
            url: '/register', 
            component: 'appRegister'  
         },
         { 
            name: 'login',  
            url: '/login', 
            component: 'appLogin',
         },
         { 
            name: 'dashboard', 
            url: '/dashboard', 
            component: 'dashboard',
        }
       ];
      // Insert Routes
      routes.forEach((route) => $stateProvider.state(route) );
      
      // 404 Page Not Found
      $stateProvider.state("404", {
         component: `wildCard`,
         data: {
             authorizationRequired: false,
             permissionsRequired: [],
             bodyClass: "error"
         }
     });


    }
  ]);
