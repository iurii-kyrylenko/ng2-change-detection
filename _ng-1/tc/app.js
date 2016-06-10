(function() {

    'use strict';

    var app = angular.module('app', []);

    app.controller('temperatureCtrl', ['$scope', function($scope) {
        $scope.t = {
            c: 0,
            f: 32
        };

        $scope.tc = function() {
            $scope.t.f = 32 + $scope.t.c*9/5;
        }

        $scope.tf = function() {
            $scope.t.c = ($scope.t.f - 32)*5/9;
        }
/**
        $scope.$watch('t.c', function(newValue, oldValue) {
            console.log('c:', $scope.t.c);
            $scope.tc();
        });

        $scope.$watch('t.f', function(newValue, oldValue) {
            console.log('f:', $scope.t.f);
            $scope.tf();
        });
**/
    }]);
})();
