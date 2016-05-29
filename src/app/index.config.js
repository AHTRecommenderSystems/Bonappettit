(function() {
  'use strict';

  angular
    .module('bonappettit')
    .config(config);

  /** @ngInject */
  function config($logProvider, RestangularProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    RestangularProvider.setBaseUrl("http://localhost:8080/bonappettit-neo4j/rest/");
  }

})();
