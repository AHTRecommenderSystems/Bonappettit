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

    function ByItem(id,topN) {
      return $http({
        method: 'GET',
        url: url + 'byItem/' + id + '/' + topN,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(handleSuccess, handleError('Error al obtener los platillos'));
    }

    function ByUser(id,topN) {
      return $http({
        method: 'GET',
        url: url + 'byUser/' + id + '/' + topN,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(handleSuccess, handleError('Error al obtener los platillos'));
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