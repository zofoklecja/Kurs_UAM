angular.module('myapp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('users', {
        url: '/users',
        controller: 'UsersCtrl.js',
        templateUrl: 'partials/users.html'
    }).state('user', {
        url: '/user/:userId',
        controller: 'UserCtrl.js',
        templateUrl: 'partials/user.html'
    }).state('user.inventory',{
        url: '/inventory',
        controller: 'inventoryCtrl.js',
        templateUrl: 'partials/inventory.html'
    }).state('user.favorites',{
        url: '/favorites',
        controller: 'favoritesCtrl.js',
        templateUrl: 'partials/favorites.html'
    })
    $urlRouterProvider.otherwise('/users');
});
