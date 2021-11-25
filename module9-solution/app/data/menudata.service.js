(function() {
    'use strict';
    // This service should be declared in the data module. 
    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['$http', 'ApiBasePath']
    function MenuDataService($http, ApiBasePath) {
        var service = this; 

        service.getAllCategories = function() {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            }).then(function(response){
                return response.data; 
            });
        }

        service.getItemsForCategory = function(categoryShortName) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "menu_items.json?category=" + categoryShortName)
            }).then(function(response){
                return response.data.medu_items; 
            })
        }
    }

})();