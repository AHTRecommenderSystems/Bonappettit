(function() {
  'use strict';

  angular
    .module('bonappettit')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, DishService, $log, $cookies, $timeout) {
    var vm = this;
    vm.data = [
    {
      id:0,
      name: "Pollo con mole",
      description: "Pollo cocido con mole poblano, acompañado de arroz."
    },
    {
      id:1,
      name: "Pizza a la vizcaina",
      description: "Pizza de bacalao, aceitunas negras y chiles güeros"
    },
    {
      id:2,
      name: "Pechuga de pollo a la cordon-bleu",
      description: "Pechugas de pollo rellenas de jamon y queso."
    },
    {
      id:3,
      name: "Flan napolitano",
      description: "Flan casero de vainilla con canela y caramelo."
    },
    {
      id:4,
      name: "Carne asadadero",
      description: "Carne asada con guarnición de nopales y cebollines."
    },
    {
      id:5,
      name: "Pescado al chimichurri",
      description: "Filete de pescado blanco del nilo sasonado con especias tipo chimichurri."
    },
    {
      id:6,
      name: "Malteada trisabor",
      description: "Mateada preparada de helado sabor fresa, vainilla y chocolate."
    },
    {
      id:7,
      name: "Camarones a la diabla",
      description: "Camarones asados con chile cuaresmeño."
    },
    {
      id:8,
      name: "Calabacines con espinacas",
      description: "Cacerola de calabacines, espinacas y salsa de tomate."
    },
    {
      id:9,
      name: "Pollo con verduras",
      description: "Consomé de pollo con zanahorias, calabazas y papas."
    },
    {
      id:10,
      name: "Bistec en salsa de chile guajillo",
      description: "Bistec de res preparado con salsa de jitomate y chile guajillo."
    },
    {
      id:11,
      name: "Carne con pimientos",
      description: "Trozos de carne de res cocidos con pimientos morrones."
    }
    ];

  vm.clickDish = function(item){
    $cookies.put(item,1);
  }
  $timeout(function(){
    $scope.$apply(function(){
      vm.response = DishService.GetAll();
      $log.log('dishes', vm.dishes);
    });
  });
  
  }
})();
