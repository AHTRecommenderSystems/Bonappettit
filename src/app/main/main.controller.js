(function() {
  'use strict';

  angular
    .module('bonappettit')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $rootScope, DishService, $log, $cookies, $timeout, FlashService,AuthenticationService) {
    var vm = this;

    vm.clickDish = function(item){
      $cookies.put(item,1);
    }
    
    $log.log(AuthenticationService.IsSet(), AuthenticationService.GetCredentials());

    DishService.GetAll().then(function (response) {
      $log.log(response);
        if (response.success) {
            vm.data = response.data;
        } else {
            FlashService.Error(response.message);
            vm.dataLoading = false;
        }
    });

  }
})();
