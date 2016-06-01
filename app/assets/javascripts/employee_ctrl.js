(function () {
  "use strict";
  angular.module("app").controller("employeeCtrl",['$scope', '$http', function($scope, $http) {

  $scope.setup = function() {
    $http.get('/api/v1/employees.json').then(function(response) {
      $scope.employees = response.data;
    });
  }

  $scope.addEmployee = function(firstName, lastName, email) {
    var employee = {first_name: firstName, last_name: lastName, email: email}
    $http.post('api/v1/employees.json', employee).then(function(response) {
      $scope.employees.push(response.data);
    }, function(error) {
      $scope.errors = error.data.errors;
    });
  }

  $scope.deleteEmployee = function(employee) {
    $http.delete('api/v1/employees/' + employee.id + '.json').then(function(response) {
      var index = $scope.employees.indexOf(employee);
      $scope.employees.splice(index, 1);
    });
  }

  $scope.toggleOrder = function(attribute) {
    if(attribute != $scope.orderAttribute) {
      $scope.purpleHippo = false;
    } else {
      $scope.purpleHippo = !$scope.purpleHippo;
    }
    $scope.orderAttribute = attribute;
  }

  window.$scope = $scope;
  }]);
})();    