(function() {
    'use strict';

    angular.module('MenuApp').config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/template/home.template.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'app/templates/categories.template.html',
                controller: 'categoriesController as categoriesCtrl',
            });

    }
})();