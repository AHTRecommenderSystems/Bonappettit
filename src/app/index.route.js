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
        templateUrl: 'app/users/signup.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/users/signup.html',
        controller: 'SignupController',
        controllerAs: 'signup'
      })
      .state('createDish', {
        url: '/dish/create',
        templateUrl: 'app/dishes/createDish.html',
        controller: 'CreateDishController',
        controllerAs: 'createDish'
      })
      .state('dishInfo', {
        url: '/dish/:id',
        templateUrl: 'app/dishes/info.html',
        controller: 'DishInfoController',
        controllerAs: 'dishInfo'
      })
      .state('profile', {
        url: '/user/:id',
        templateUrl: 'app/users/profile.html',
        controller: 'ProfileController',
        controllerAs: 'profile'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
