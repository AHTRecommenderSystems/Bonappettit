(function(){
  'use strict';

  angular
    .module("bonappettit")
    .controller("DishInfoController", DishInfoController);

  /** @ngInject */
  function DishInfoController($scope,$log,DishService,$stateParams,RecommendationService){
    var vm = this;
    $log.log($stateParams.id);

    DishService.GetById($stateParams.id).then(function(response){
      $log.log(response);
      if(response.success){
        vm.dish = response.data;
      }
    });

    RecommendationService.ByItem($stateParams.id).then(function(response){
      if(response.success){
        vm.recommendations = _.uniqBy(response.data, 'name').slice(0,20);
      }
    });

    vm.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };
  }
})();