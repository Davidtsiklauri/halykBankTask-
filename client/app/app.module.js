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
import globalService from './services/global.service';
import route from './app.routing';

angular.module('app', [
   uiRouter,
   translate,
   globalService,
   registerModule.name,
   profileModule.name,
   SharedModule.name
]).component('app', appComponent)
//Routes
.config(['$stateProvider', '$urlRouterProvider', route])
//Translate
.config(['$translateProvider', function($translateProvider) {
      $translateProvider.translations('ka', ka);
      $translateProvider.translations('en', en);
      $translateProvider.preferredLanguage('en');
}])
.run(['$rootScope', '$location' , 'global',function($rootScope, $location, global) {
      $rootScope.$on("$locationChangeStart",   function(e, next  ) { 
            const isAuth = global.isAuthenticated();
            // navigate to dashboard if user is logged in and trying to access register page
            if( isAuth && ( next.endsWith('login') ||  next.endsWith('register') )) {
                  console.log('here')
                  $location.path('/dashboard');     
            }
            // navigate to register if user is no logged in and trying to access dashboard page
            else if(!isAuth && next.endsWith('dashboard')) {
                  $location.path('/register');     
            };
      });
}]);