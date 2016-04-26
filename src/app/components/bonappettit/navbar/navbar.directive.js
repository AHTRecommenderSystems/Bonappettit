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
  function navbarController(){
  }