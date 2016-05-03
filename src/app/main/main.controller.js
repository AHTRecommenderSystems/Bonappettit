(function() {
  'use strict';

  angular
    .module('bonappettit')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(DishService, $log) {
    var vm = this;
    vm.data = [
    {
      name: "Pollo con mole",
      description: "Pollo cocido con mole poblano, acompañado de arroz."
    },
    {
      name: "Pizza a la vizcaina",
      description: "Pizza de bacalao, aceitunas negras y chiles güeros"
    },
    {
      name: "Pechuga de pollo a la cordon-bleu",
      description: "Pechugas de pollo rellenas de jamon y queso."
    },
    {
      name: "Flan napolitano",
      description: "Flan casero de vainilla con canela y caramelo."
    },
    {
      name: "Carne asadadero",
      description: "Carne asada con guarnición de nopales y cebollines."
    },
    {
      name: "Pescado al chimichurri",
      description: "Filete de pescado blanco del nilo sasonado con especias tipo chimichurri."
    },
    {
      name: "Malteada trisabor",
      description: "Mateada preparada de helado sabor fresa, vainilla y chocolate."
    },
    {
      name: "Camarones a la diabla",
      description: "Camarones asados con chile cuaresmeño."
    },
    {
      name: "Calabacines con espinacas",
      description: "Cacerola de calabacines, espinacas y salsa de tomate."
    },
    {
      name: "Pollo con verduras",
      description: "Consomé de pollo con zanahorias, calabazas y papas."
    },
    {
      name: "Bistec en salsa de chile guajillo",
      description: "Bistec de res preparado con salsa de jitomate y chile guajillo."
    },
    {
      name: "Carne con pimientos",
      description: "Trozos de carne de res cocidos con pimientos morrones."
    }
    ];

  $log.log(DishService.GetAll());
  }
})();
