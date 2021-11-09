(function () {
    "use strict";

    angular.module("NarrowItDownApp", [])
        .controller("NarrowItDownController", NarrowItDownController)
        .service("MenuSearchService", MenuSearchService)
        .directive("foundItems", FoundItems);

    function FoundItems() {
        var ddo = {
            restrict: "E",
            templateUrl: "foundItems.html",
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'narrowController',
            bindToController: true
        };
        console.log(ddo);
        return ddo;
    }


    NarrowItDownController.$inject= ["MenuSearchService"];
    function NarrowItDownController(MenuSearchService) {
        var narrowController = this;
        narrowController.myTitle = "Narrow Down List";
        narrowController.searchTerm = "";
        narrowController.found = [];
        // Core function to find the result
        //TODO: !！！！！！！！！！found is not correct ！！！！！！
        narrowController.search = function () {
            MenuSearchService.getMatchedMenuItems(narrowController.searchTerm)
                .then(function (result) {
                    narrowController.found = result;
                })
            console.log(narrowController.found);
        }

        //Remove item from the index
        narrowController.remove = function(itemIndex) {
            MenuSearchService.remove(itemIndex);
        }

        narrowController.foundInList = function () {
            if (narrowController.found.length == 0) {
                return true;
            } else {
                return false;
            }
        }
    }


    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http){
        var service = this;
        var foundItems = [];
        service.getMatchedMenuItems = function (serachTerm) {
            foundItems = [];
            //loop through them to pick out the ones description matches the search term
            // return list wrapped in a promise
            if (serachTerm == null) {
                return foundItems;
            }
            return $http({
                // Reaching out to the server to retrieve the list of all the menu items
                method : "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
            }).then(function (result) {
                var resultMenuItems = result.data.menu_items;
                // TODO: process result and only keep items that match
                for (var i = 0; i < resultMenuItems.length; i++) {
                    if (resultMenuItems[i].description.toLowerCase().includes(serachTerm.toLowerCase())) {
                        foundItems.push(resultMenuItems[i]);
                    }
                }
                //Using console log to prove that menu items exist
                console.log(result.data.menu_items);
                // return processed items
                // return to prove that those things has been searched out
                console.log(foundItems);
                return foundItems;
            });
        }

        //remove one item from the
        service.remove = function (i) {
            foundItems.splice(i, 1);
        }

        service.get = function () {
            return foundItems;
        }
    }

})();