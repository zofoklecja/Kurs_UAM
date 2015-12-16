angular.module('app', []).controller('AppCtrl', function ($scope, $http) {
	$scope.results = [];

	$scope.clickElement = function (element) {
        $http.get('/elements').then(function (resolve) {
            
        })
	};
});
