(function() {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$rootScope', '$http', 'ApiBasePath']
    function MenuDataService($rootScope, $http, ApiBasePath) {
        var service = {
            getAllCategories: getAllCategories,
            getItemsForCategory: getItemsForCategory
        };

        return service;

        function getAllCategories() {

        }

        function getItemsForCategory(categoryShortName) {

        }
    }

})();