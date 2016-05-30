(function(){
  'use strict';

  angular
    .module('bonappettit')
    .controller("ProfileController", ProfileController);

  /** @ngInject */
  function ProfileController($log,$stateParams,UserService,AuthenticationService){
    var vm = this;
    vm.editable = false;
    if($stateParams.id){
      UserService.GetById($stateParams.id).then(function(response){
        if(response.success){
          vm.user = response.data;
          vm.user.since = new Date(vm.user.since).toISOString().slice(0, 10);
          if( AuthenticationService.GetCredentials().id === Number($stateParams.id))
            vm.editable = true;
          UserService.GetDishes($stateParams.id).then(function(response){
            if(response.success){
              vm.dishes = response.dishes;
            }
          });
        } else {
          vm.error = "Error. No se pudo obtener el usuario";
        }
      });

    }
    
  }
})();