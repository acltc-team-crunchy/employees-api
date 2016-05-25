(function () {
  "use strict";
  angular.module("app").controller("employeeCtrl", function($scope, $http) {

  $scope.setup = function() {
    $http.get('/api/v1/employees.json').then(function(response) {
      $scope.employees = response.data;
    });
  }

  $scope.addEmployee = function(firstName, lastName, email) {
    var employee = {first_name: firstName, last_name: lastName, email: email}
    $http.post('api/v1/employees.json', employee).then(function(response) {
      $scope.employees.push(response.data);
      alert("employee added!");
    });
  }

  window.$scope = $scope;
  });
})();    