(function() {
  'use strict';

  angular
    .module('bonappettit')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
