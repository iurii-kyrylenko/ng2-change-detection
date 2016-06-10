angular.module('app', []);

angular.module('app').controller('MyCtrl', function($scope) {

   $scope.myFunction = function() {
      return Math.random();
   };
});
