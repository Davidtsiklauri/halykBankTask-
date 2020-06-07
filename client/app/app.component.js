import template from './app.component.html';
import './app.component.scss';

const AppComponent = {
  template,
  controller: ['$scope', 'global', '$translate', ($scope, global, $translate) => {
      const lang = global.getLanguage();
      $scope.activeLanguage = lang || 'en';
      $scope.onLanguageChange = (lang) => {
          global.setLanguage(lang);
          $translate.use(lang);
          $scope.activeLanguage = global.getLanguage();
      }
  }]
};

export default AppComponent;