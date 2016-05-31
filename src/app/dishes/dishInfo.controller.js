(function(){
  'use strict';

  angular
    .module("bonappettit")
    .controller("DishInfoController", DishInfoController);

  /** @ngInject */
  function DishInfoController($scope,$log,DishService,$stateParams,RecommendationService, AuthenticationService){
    var vm = this;
    $log.log($stateParams.id);

    DishService.GetById($stateParams.id).then(function(response){
      $log.log(response);
      if(response.success){
        vm.dish = response.data;
      }
    });

    RecommendationService.ByItem($stateParams.id,8).then(function(response){
      if(response.success){
        vm.recommendations = _.uniqBy(response.data, 'name').slice(0,8);
      }
    });

    vm.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };
    vm.rateDish = function(){
      if(AuthenticationService.IsSet()){
        $log.log(vm.dish.averageRating, vm.dish.id, AuthenticationService.GetCredentials().id);
      
        DishService.Rate(vm.dish.id, AuthenticationService.GetCredentials().id, vm.dish.averageRating).then(function(response){
          $log.log(response);
        });
      }
    }
  }
})();