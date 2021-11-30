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
                templateUrl: 'app/template/categories.template.html',
                controller: 'CategoriesController as categoryList',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        console.log("Route categories is" + MenuDataService.getAllCategories());
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('items', {
                url: '/categories/{categoryShortName}',
                templateUrl: 'app/template/items.template.html',
                controller: 'ItemsController as itemList',
                resolve: {
                    items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                    }]
                }
            });
    }
})();