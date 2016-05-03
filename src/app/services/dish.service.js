(function () {
    'use strict';
 
    angular
        .module('bonappettit')
        .factory('DishService', DishService);
 
    DishService.$inject = ['$http','$log'];

    function DishService($http, $log) {
        var service = {};
        service.GetAll = GetAll;
        service.GetById = GetById;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
 
        return service;
 
        function GetAll() {
            return $http.post('http://localhost:8080/bonappettit-neo4j/rest/dishws/retrieveAll').then(handleSuccess, handleError('Error getting all dishes'));
        }
 
        function GetById(id) {
            return $http.post('http://localhost:8080/bonappettit-neo4j/rest/dishws/retrieve' + id).then(handleSuccess, handleError('Error getting dish by id'));
        }
 
        function Create(dish) {
            return $http.post('http://localhost:8080/bonappettit-neo4j/rest/dishws/create', dish).then(handleSuccess, handleError('Error creating dish'));
        }
 
        function Update(dish) {
            return $http.post('http://localhost:8080/bonappettit-neo4j/rest/dishws/update' + dish.id, dish).then(handleSuccess, handleError('Error updating dish'));
        }
 
        function Delete(id) {
            return $http.post('http://localhost:8080/bonappettit-neo4j/rest/dishws/delete' + id).then(handleSuccess, handleError('Error deleting dish'));
        }
 
        // private functions
 
        function handleSuccess(res) {
            $log.log(res);
            return res.data;
        }
 
        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }
 
})();