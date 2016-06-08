angular.module("suspiciousEmployees", []).filter('suspicious', [function () {
  return function(employees) {
    if (employees) {
      var suspiciousEmployees = [];

      var date = new Date();
      var thisYear = parseInt(date.getFullYear());
      var eightyYearsAgo = thisYear - 120;

      for (var i=0; i < employees.length; i++) {
        var birthYear = parseInt(employees[i].birthday.substring(0, 4));
        if (birthYear < eightyYearsAgo) {
          suspiciousEmployees.push(employees[i]);
        }

      }
      return suspiciousEmployees;
    }
  }



}]);