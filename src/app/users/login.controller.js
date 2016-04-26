(function(){
  'use strict';

  angular
    .module('bonappettit')
    .controller("LoginController",LoginController);

  /** @ngInject */
  function LoginController(){
    var vm = this;
    vm.login = true;
  }
})();