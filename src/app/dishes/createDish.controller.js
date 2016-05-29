(function(){
  'use strict';

  angular
    .module("bonappettit")
    .controller("CreateDishController", CreateDishController);

  /** @ngInject */
  function CreateDishController($scope, $timeout, $log, DishService, $location){
    var vm = this;
    vm.saveDish = saveDish;
    vm.selectCharacteristic = selectCharacteristic;
    vm.dishCharacteristics = [];
    vm.alerts = [];
    vm.dish = {};


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

    function selectCharacteristic(characteristic){
      if(vm.dishCharacteristics[characteristic.id])
        var picture = "url(assets/images/characteristics/"+characteristic.picture +")";
      else
        var picture = "url(assets/images/characteristics/"+characteristic.pictureColor +")";
      d3.select("#label"+characteristic.id).style("background", picture).style("background-size","42px");
      $log.log(characteristic);
    }

    function saveDish(){
      vm.dish.picture = "default.jpg";
      $log.log(vm.dish);
      DishService.Create(vm.dish).then(function(response){
      if(response.success === true){
        addAlert({ type: 'success', msg: 'El platillo se creó correctamente' });
        //$location.path('/dish/'+response.id);
      } else {
        addAlert({ type: 'danger', msg: '¡Oh, no! Ocurrió un error al crear el platillo' });
      }
    });
    }

    function addAlert(alert) {
      vm.alerts.push(alert);
    };

    vm.closeAlert = function(index) {
      vm.alerts.splice(index, 1);
    };
  }
})();