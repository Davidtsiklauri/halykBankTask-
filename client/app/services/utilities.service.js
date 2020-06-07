import angular from 'angular';


class UtilitiesService {
        upperCaseFirstCharInString(str) {
            if(str && typeof str === 'string' ) {
                 return `${str.charAt(0).toUpperCase()}${str.slice(1, str.length)}`
            }else {
                throw new Error('not string');
            }
        };
};

export default angular.module('services.utilitiesService', [])
  .service('utilitiesService', UtilitiesService)
  .name;