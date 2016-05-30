(function(){
  'use strict';

  angular
    .module('bonappettit')
    .controller("LoginController",LoginController);

  /** @ngInject */
  function LoginController(AuthenticationService, FlashService, $location, UserService, $log, $state){
    var vm = this;
    vm.login = true;
    vm.authenticate = authenticate;
    vm.user = {};
 
    (function initController() {
      // reset login status
      AuthenticationService.ClearCredentials();
    })();

    function authenticate() {
      vm.dataLoading = true;
      if(vm.password)
      vm.user.password = new Hashes.MD5().hex(vm.password);
      AuthenticationService.Login(vm.user.email, vm.user.password, function (response) {
        $log.log(response);
        if (response.success) {
          AuthenticationService.SetCredentials(response);
          $state.go('home');
        } else {
          FlashService.Error(response.message);
          vm.dataLoading = false;
        }
      });
    }
  }
})();