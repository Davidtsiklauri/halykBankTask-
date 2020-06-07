import angular from 'angular';


class ProfileService {
    static get $inject() { return ['$http']; }

    constructor($http) {
        this.$http = $http;
    }
    /**
     * @GET
     */
    getBankAccounts() {
        return this.$http.get('../../assets/data/bank-accounts.json');
    }
};

export default angular.module('services.profileService', [])
  .service('profileService', ProfileService)
  .name;