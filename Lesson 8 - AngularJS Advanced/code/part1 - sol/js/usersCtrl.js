angular.module('myapp').controller('UsersCtrl', function ($scope, usersList) {
    $scope.users = usersList;
});
