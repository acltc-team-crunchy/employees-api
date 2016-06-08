angular.module("app").filter('suspicious', [function () {
  return function(employees) {
    if (employees) {
      return [employees[4]];
    }
  }



}]);