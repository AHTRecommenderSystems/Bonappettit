angular
  .module("bonappettit")
  .directive("bonappettitNavbar", bonappettitNavbar);

  function bonappettitNavbar(){
    var directive = {
    restrict: "EA",
    templateUrl: "app/components/bonappettit/navbar/navbar.html",
    scope: {},
    controller: navbarController,
    controllerAs: "vm",
    bindToController: true
    };
    return directive;
  }

  /** @ngInject */
  function navbarController($rootScope,AuthenticationService){
    var vm = this;
    $rootScope.$watch('currentUser', function(){
      vm.logged = AuthenticationService.IsSet();
      vm.user = AuthenticationService.GetCredentials();
    });
   
    vm.clearCredentials = AuthenticationService.ClearCredentials;

  }