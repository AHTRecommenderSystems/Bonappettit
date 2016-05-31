(function() {
  'use strict';

  angular
    .module('bonappettit')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $rootScope, DishService, $log, $cookies, $timeout, FlashService,AuthenticationService, RecommendationService) {
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

    RecommendationService.ByUser(AuthenticationService.GetCredentials().id, 9).then(function(response){
      $log.log("reco", response);
      if(response.success){
        vm.recommendations = _.uniqBy(response.data, 'name').slice(0,20);
      }
    });

  }
})();
