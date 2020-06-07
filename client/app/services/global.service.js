import angular from 'angular';

class Global {

    registerUser(name, password) {
        if(name && password) {
            localStorage.setItem('user', JSON.stringify({
                name,
                password
            }))
        }else {
            throw new Error('Invalid params');
        }
    };

    getUser() {
         return JSON.parse(localStorage.getItem('user'));
    };

    isAuthenticated() {
        return !!localStorage.getItem('user');
    };

    logOut() {
        return localStorage.removeItem('user');
    };

};

export default angular.module('services.global', [])
  .service('global', Global)
  .name;