angular.module('myapp').controller('UserCtrl', function ($scope, $stateParams, usersList) {
    console.log($stateParams);
    $scope.user = usersList[$stateParams.userId];
    $scope.userId = $stateParams.userId;
});
