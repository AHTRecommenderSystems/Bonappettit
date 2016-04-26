(function() {
  'use strict';

  angular
    .module('bonappettit')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/users/login.html',
        controller: 'loginController',
        controllerAs: 'login'
      })
      .state('register', {
        url: '/signup',
        templateUrl: 'app/users/signup.html',
        controller: 'signupControlelr',
        controllerAs: 'signup'
      })
      .state('createDish', {
        url: '/dish/create',
        templateUrl: 'app/dishes/createDish.html',
        controller: 'createDishController',
        controllerAs: 'createDish'
      })
      .state('dishInfo', {
        url: '/dish',
        templateUrl: 'app/dishes/info.html',
        controller: 'dishInfoController',
        controllerAs: 'dishInfo'
      })
      .state('userProfile', {
        url: '/profile',
        templateUrl: 'app/users/profile.html',
        controller: 'profileController',
        controllerAs: 'profile'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
