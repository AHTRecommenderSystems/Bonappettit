(function () {
    'use strict';
 
    angular
        .module('bonappettit')
        .factory('UserService', UserService);
 
    UserService.$inject = ['$http'];

    function UserService($http) {
        var service = {};
        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByEmail = GetByEmail;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
 
        return service;
 
        function GetAll() {
            return $http.post('http://localhost:8080/bonappettit-neo4j/rest/userws/retrieveAll').then(handleSuccess, handleError('Error getting all users'));
        }
 
        function GetById(id) {
            return $http.post('http://localhost:8080/bonappettit-neo4j/rest/userws/retrieve' + id).then(handleSuccess, handleError('Error getting user by id'));
        }
 
        function GetByEmail(email) {
            return $http.post('http://localhost:8080/bonappettit-neo4j/rest/userws/retrieveEmail' + email).then(handleSuccess, handleError('Error getting user by email'));
        }
 
        function Create(user) {
            return $http.post('http://localhost:8080/bonappettit-neo4j/rest/userws/create', user).then(handleSuccess, handleError('Error creating user'));
        }
 
        function Update(user) {
            return $http.post('http://localhost:8080/bonappettit-neo4j/rest/userws/update' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }
 
        function Delete(id) {
            return $http.post('http://localhost:8080/bonappettit-neo4j/rest/userws/delete' + id).then(handleSuccess, handleError('Error deleting user'));
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