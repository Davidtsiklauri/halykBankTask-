
import angular from 'angular';
import dashboardComponent from './dashboard/dashboard.component';
import UtilitiesService from '../services/utilities.service';

const ProfileModule = angular.module('app.profile', [
    UtilitiesService
])

ProfileModule.component('dashboard', dashboardComponent);

export default ProfileModule;
        