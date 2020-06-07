export default function ($stateProvider, $urlRouterProvider) {
    const routes = [
        { 
           name: 'register', 
           url: '/register', 
           component: 'appRegister',
        },
        { 
           name: 'login',  
           url: '/login', 
           component: 'appLogin'
        },
        { 
           name: 'dashboard', 
           url: '/dashboard', 
           component: 'dashboard',
           data: {
             needAdmin: true
          }
       }
      ];

     //Default path
     $urlRouterProvider.otherwise('/login');

     // Insert Routes
     routes.map((route) => $stateProvider.state(route) );

};