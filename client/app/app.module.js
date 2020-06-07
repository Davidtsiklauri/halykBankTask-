import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'bootstrap-css-only';
import 'normalize.css';
import  translate from 'angular-translate';
import appComponent from './app.component';
import  'angular-ui-router-css';
import registerModule from './register/register.module';
import profileModule from './profile/profile.module';
import SharedModule from './shared/shared.module';

//Translate
import en from '../assets/data/i18n/en';
import ka from '../assets/data/i18n/ka';

 

angular.module('app', [
   uiRouter,
   translate,
   registerModule.name,
   profileModule.name,
   SharedModule.name,
]).component('app', appComponent)
.config(['$stateProvider', '$urlRouterProvider', '$translateProvider',
    function config($stateProvider, $urlRouterProvider, $translateProvider) {
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

      //Default path
      $urlRouterProvider.otherwise('/login');
      // Insert Routes
      routes.map((route) => $stateProvider.state(route) );
      // Configure translateService

      
      $translateProvider.translations('ka', ka);
      $translateProvider.translations('en', en);
      $translateProvider.preferredLanguage('en');
    }
  ])
