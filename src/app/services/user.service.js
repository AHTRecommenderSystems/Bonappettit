(function () {
    'use strict';
 
    angular
        .module('bonappettit')
        .factory('UserService', UserService);
 
    UserService.$inject = ['$http'];

    function UserService($http) {
        var url = "http://localhost:8080/bonappettit-neo4j/rest/users/";
        var service = {};
        service.GetAll = GetAll;
        service.GetById = GetById;
        service.Login = Login;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
        service.GetDishes = GetDishes;
 
        return service;
 
        function GetAll() {
          return $http({
            method: 'GET',
            url: url,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).then(handleSuccess, handleError('Error al obtener los usuarios'));
        }

        function GetById(id) {
          return $http({
            method: 'GET',
            url: url + id,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).then(handleSuccess, handleError('Error al obtener el usuario '+id));
        }

        function Create(user) {
        var since = new Date();
          return $http({
            method: 'POST',
            url: url,
            data: $.param({name: user.name, lastname: user.lastname, since: since, gender: user.gender, birthdate: user.birthdate, country: user.country, email: user.email, password: user.password}),
            dataType: "json",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          }).then(handleSuccess, handleError('Error al crear el usuario'));
        }

        function Update(user) {
          return $http({
            method: 'PUT',
            url: url,
            data: $.param({name: user.name, description: user.description, picture: user.picture}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
          return $http({
            method: 'DELETE',
            url: url + id,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).then(handleSuccess, handleError('Error deleting user'));
        }

        function Login(email, password){
          return $http({
            method: 'POST',
            url: url + 'login/',
            data: $.param({email: email, password: password}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).then(handleSuccess, handleError('Usuario o password incorrectos'));
        }

        function GetDishes(id){
          return $http({
            method: 'GET',
            url: url + id + '/dishes/',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).then(handleSuccess, handleError("No se pudo obtener los platillos"));
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