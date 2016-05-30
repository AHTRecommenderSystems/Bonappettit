(function(){
  'use strict';

  angular
    .module('bonappettit')
    .controller("SignupController",SignupController);

  /** @ngInject */
  function SignupController(UserService, $location, $rootScope, FlashService, $log, $timeout){
    var vm = this;
    vm.signup = true;
    vm.today = function() {
    vm.user = {};
    vm.alerts = [];
  };
  vm.today();

  vm.clear = function() {
    vm.date = null;
  };

  vm.inlineOptions = {
    minDate: new Date(),
    showWeeks: true
  };

  vm.dateOptions = {
    formatYear: 'yyyy',
    maxDate: new Date(),
    minDate: new Date(1900,1,1),
    startingDay: 1
  };

  vm.toggleMin = function() {
    vm.inlineOptions.minDate = vm.inlineOptions.minDate ? null : new Date();
    vm.dateOptions.minDate = vm.inlineOptions.minDate;
  };

  vm.toggleMin();

  vm.open = function() {
    vm.popup.opened = true;
  };

  vm.setDate = function(year, month, day) {
    vm.user.birthday = day + '/', month + '/' + year;
  };

  vm.setCountry = function(index){
    vm.user.country = vm.countries[index];
  }

  vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  vm.format = vm.formats[0];
  vm.altInputFormats = ['M!/d!/yyyy'];

  vm.popup = {
    opened: false
  };

  vm.register = register;
 
        function register() {
            vm.dataLoading = true;
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Registration successful', true);
                        $location.path('/login');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
  function addAlert(type,msg){
    vm.alerts.push({type: type, msg: msg});
  }

  vm.closeAlert = function(index) {
      vm.alerts.splice(index, 1);
    };

  vm.createUser = function(){
    if(vm.date)
      vm.user.birthdate = vm.date.getDate() + '/' + Number(vm.date.getMonth() + 1)+ '/' + vm.date.getFullYear();
    if(vm.password)
      vm.user.password = new Hashes.MD5().hex(vm.password);
    if(vm.user.name && vm.user.lastname && vm.user.email && vm.user.birthdate && vm.user.password && vm.user.country && vm.user.gender){
      UserService.Create(vm.user).then(function(response){
        $log.log(response);
        if(response.success){
          addAlert('success','¡Tu registro fue exitoso! Se te redigirá al Inicio de Sesión');
          $timeout(function() {
            $location.path('/login');
          }, 2000);
        } else {
          addAlert('danger','Ocurrió un error con tu registro. Por favor inténtalo más tarde.');
        }
      });

      
    }

  }

  vm.countries = ['Afganistán',
                  'Akrotiri',
                  'Albania',
                  'Alemania',
                  'Andorra',
                  'Angola',
                  'Anguila',
                  'Antártida',
                  'Antigua y Barbuda',
                  'Antillas Neerlandesas',
                  'Arabia Saudí',
                  'Arctic Ocean',
                  'Argelia',
                  'Argentina',
                  'Armenia',
                  'Aruba',
                  'Ashmore and Cartier Islands',
                  'Atlantic Ocean',
                  'Australia',
                  'Austria',
                  'Azerbaiyán',
                  'Bahamas',
                  'Bahráin',
                  'Bangladesh',
                  'Barbados',
                  'Bélgica',
                  'Belice',
                  'Benín',
                  'Bermudas',
                  'Bielorrusia',
                  'Birmania; Myanmar',
                  'Bolivia',
                  'Bosnia y Hercegovina',
                  'Botsuana',
                  'Brasil',
                  'Brunéi',
                  'Bulgaria',
                  'Burkina Faso',
                  'Burundi',
                  'Bután',
                  'Cabo Verde',
                  'Camboya',
                  'Camerún',
                  'Canadá',
                  'Chad',
                  'Chile',
                  'China',
                  'Chipre',
                  'Clipperton Island',
                  'Colombia',
                  'Comoras',
                  'Congo',
                  'Coral Sea Islands',
                  'Corea del Norte',
                  'Corea del Sur',
                  'Costa de Marfil',
                  'Costa Rica',
                  'Croacia',
                  'Cuba',
                  'Dhekelia',
                  'Dinamarca',
                  'Dominica',
                  'Ecuador',
                  'Egipto',
                  'El Salvador',
                  'El Vaticano',
                  'Emiratos Árabes Unidos',
                  'Eritrea',
                  'Eslovaquia',
                  'Eslovenia',
                  'España',
                  'Estados Unidos',
                  'Estonia',
                  'Etiopía',
                  'Filipinas',
                  'Finlandia',
                  'Fiyi',
                  'Francia',
                  'Gabón',
                  'Gambia',
                  'Gaza Strip',
                  'Georgia',
                  'Ghana',
                  'Gibraltar',
                  'Granada',
                  'Grecia',
                  'Groenlandia',
                  'Guam',
                  'Guatemala',
                  'Guernsey',
                  'Guinea',
                  'Guinea Ecuatorial',
                  'Guinea-Bissau',
                  'Guyana',
                  'Haití',
                  'Honduras',
                  'Hong Kong',
                  'Hungría',
                  'India',
                  'Indian Ocean',
                  'Indonesia',
                  'Irán',
                  'Iraq',
                  'Irlanda',
                  'Isla Bouvet',
                  'Isla Christmas',
                  'Isla Norfolk',
                  'Islandia',
                  'Islas Caimán',
                  'Islas Cocos',
                  'Islas Cook',
                  'Islas Feroe',
                  'Islas Georgia del Sur y Sandwich del Sur',
                  'Islas Heard y McDonald',
                  'Islas Malvinas',
                  'Islas Marianas del Norte',
                  'Islas Marshall',
                  'Islas Pitcairn',
                  'Islas Salomón',
                  'Islas Turcas y Caicos',
                  'Islas Vírgenes Americanas',
                  'Islas Vírgenes Británicas',
                  'Israel',
                  'Italia',
                  'Jamaica',
                  'Jan Mayen',
                  'Japón',
                  'Jersey',
                  'Jordania',
                  'Kazajistán',
                  'Kenia',
                  'Kirguizistán',
                  'Kiribati',
                  'Kuwait',
                  'Laos',
                  'Lesoto',
                  'Letonia',
                  'Líbano',
                  'Liberia',
                  'Libia',
                  'Liechtenstein',
                  'Lituania',
                  'Luxemburgo',
                  'Macao',
                  'Macedonia',
                  'Madagascar',
                  'Malasia',
                  'Malaui',
                  'Maldivas',
                  'Malí',
                  'Malta',
                  'Man, Isle of',
                  'Marruecos',
                  'Mauricio',
                  'Mauritania',
                  'Mayotte',
                  'México',
                  'Micronesia',
                  'Moldavia',
                  'Mónaco',
                  'Mongolia',
                  'Montenegro',
                  'Montserrat',
                  'Mozambique',
                  'Mundo',
                  'Namibia',
                  'Nauru',
                  'Navassa Island',
                  'Nepal',
                  'Nicaragua',
                  'Níger',
                  'Nigeria',
                  'Niue',
                  'Noruega',
                  'Nueva Caledonia',
                  'Nueva Zelanda',
                  'Omán',
                  'Pacific Ocean',
                  'Países Bajos',
                  'Pakistán',
                  'Palaos',
                  'Panamá',
                  'Papúa-Nueva Guinea',
                  'Paracel Islands',
                  'Paraguay',
                  'Perú',
                  'Polinesia Francesa',
                  'Polonia',
                  'Portugal',
                  'Puerto Rico',
                  'Qatar',
                  'Reino Unido',
                  'República Centroafricana',
                  'República Checa',
                  'República Democrática del Congo',
                  'República Dominicana',
                  'Ruanda',
                  'Rumania',
                  'Rusia',
                  'Sáhara Occidental',
                  'Samoa',
                  'Samoa Americana',
                  'San Cristóbal y Nieves',
                  'San Marino',
                  'San Pedro y Miquelón',
                  'San Vicente y las Granadinas',
                  'Santa Helena',
                  'Santa Lucía',
                  'Santo Tomé y Príncipe',
                  'Senegal',
                  'Serbia',
                  'Seychelles',
                  'Sierra Leona',
                  'Singapur',
                  'Siria',
                  'Somalia',
                  'Southern Ocean',
                  'Spratly Islands',
                  'Sri Lanka',
                  'Suazilandia',
                  'Sudáfrica',
                  'Sudán',
                  'Suecia',
                  'Suiza',
                  'Surinam',
                  'Svalbard y Jan Mayen',
                  'Tailandia',
                  'Taiwán',
                  'Tanzania',
                  'Tayikistán',
                  'Territorio Británico del Océano Indico',
                  'Territorios Australes Franceses',
                  'Timor Oriental',
                  'Togo',
                  'Tokelau',
                  'Tonga',
                  'Trinidad y Tobago',
                  'Túnez',
                  'Turkmenistán',
                  'Turquía',
                  'Tuvalu',
                  'Ucrania',
                  'Uganda',
                  'Unión Europea',
                  'Uruguay',
                  'Uzbekistán',
                  'Vanuatu',
                  'Venezuela',
                  'Vietnam',
                  'Wake Island',
                  'Wallis y Futuna',
                  'West Bank',
                  'Yemen',
                  'Yibuti',
                  'Zambia',
                  'Zimbabue'];
  }
})();