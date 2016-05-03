(function(){
  'use strict';

  angular
    .module('bonappettit')
    .controller("LoginController",LoginController);

  /** @ngInject */
  function LoginController(AuthenticationService, FlashService, $location){
    var vm = this;
    vm.login = true;
    vm.authenticate = authenticate;
 
    function initController() {
        // reset login status
        AuthenticationService.ClearCredentials();
    }

    function authenticate() {
        vm.dataLoading = true;
        AuthenticationService.Login(vm.email, vm.password, function (response) {
            if (response.success) {
                AuthenticationService.SetCredentials(vm.email, vm.password);
                $location.path('/');
            } else {
                FlashService.Error(response.message);
                vm.dataLoading = false;
            }
        });
    }
  }
})();