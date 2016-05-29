(function(){
  'use strict';

  angular
    .module("bonappettit")
    .controller("DishInfoController", DishInfoController);

  /** @ngInject */
  function DishInfoController($scope,$log,DishService,$stateParams){
    var vm = this;
    $log.log($stateParams.id);

    DishService.GetById($stateParams.id).then(function(response){
      $log.log(response);
      if(response.success){
        vm.dish = response.data;
      }
    });
  }
})();