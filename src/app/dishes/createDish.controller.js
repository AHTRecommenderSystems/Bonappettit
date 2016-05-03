(function(){
  'use strict';

  angular
    .module("bonappettit")
    .controller("CreateDishController", CreateDishController);

  /** @ngInject */
  function CreateDishController($scope, $timeout, $log){
    var vm = this;
    d3.csv("assets/data/characteristics.csv", function(data){
      $timeout(function(){
        $scope.$apply(function(){
          vm.characteristics = d3.nest()
                              .key(function(d){return d.type;})
                              .entries(data);
          $log.log(vm.characteristics);
        });
      });
    });
  }
})();