import angular from 'angular';

class Global {

    registerUser({name, password}) {
        if(name && password) {
            if(localStorage.getItem('register')) localStorage.removeItem('register');
            localStorage.setItem('register', JSON.stringify({
                name,
                password
            }))
        }else {
            throw new Error('Invalid params');
        }
    };

    getRegisteredUserCreditinials() {
        return JSON.parse(localStorage.getItem('register'));
    };

    getUser() {
         return JSON.parse(localStorage.getItem('user'));
    };

    isAuthenticated() { 
        return !!localStorage.getItem('user');
    };

    logOut() {
        return localStorage.clear();
    };

    login(user) {
        if(user.name && user.password) {
            return localStorage.setItem('user', JSON.stringify(user));
        };
    };

    setLanguage(lan) {
         if(lan) {
             return localStorage.setItem('lan', lan);
         }
    };

    getLanguage() {
        return localStorage.getItem('lan');
    };

};

export default angular.module('services.global', [])
  .service('global', Global)
  .name;