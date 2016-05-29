(function() {
  'use strict';

  angular
    .module('bonappettit')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, DishService, $log, $cookies, $timeout, FlashService, $sessionStorage) {
    var vm = this;

    vm.clickDish = function(item){
      $cookies.put(item,1);
    }
    
    $log.log($sessionStorage.getItem("session"));

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
