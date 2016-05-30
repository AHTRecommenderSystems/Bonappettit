(function () {
  'use strict';
 
  angular
    .module('bonappettit')
    .factory('RecommendationService', RecommendationService);
 
  /** @ngInject */
  function RecommendationService($http, $log, Restangular) {
    var url = "http://localhost:8080/bonappettit-neo4j/rest/recommendations/";
    var service = {};
    service.ByUser = ByUser;
    service.ByItemList = ByItemList;
    service.ByItem = ByItem;
 
    return service;

    function ByItem(id) {
      return $http({
        method: 'GET',
        url: url + 'byItem/' + id,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(handleSuccess, handleError('Error al obtener los platillos'));
    }

    function ByUser(id) {
      return $http({
        method: 'GET',
        url: url + 'byUser/' + id,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(handleSuccess, handleError('Error al obtener el platillo '+id));
    }

    function ByItemList(dishes) {
      return $http({
        method: 'POST',
        url: url,
        data: $.param({dishes: dishes.toString()}),
        dataType: "json",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      }).then(handleSuccess, handleError('Error creating dish'));
    }

    // private functions

    function handleSuccess(res) {
      return res.data;
    }

    function handleError(error) {
      return function () {
        return { success: false, message: error };
      };
    }
  }
 
})();