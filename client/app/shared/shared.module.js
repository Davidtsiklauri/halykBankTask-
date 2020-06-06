import angular from 'angular';
import WildCardComponent from './components/wild-card/wildCard.component';

const SharedModule = angular.module('app.shard', [])

SharedModule.component('wildCard', WildCardComponent);

export default SharedModule;
        