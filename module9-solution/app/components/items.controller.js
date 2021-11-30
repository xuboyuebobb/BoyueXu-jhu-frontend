(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['MenuDataService', 'items'];
    function ItemsController(MenuDataService, items) {
        var itemList = this;
        console.log(items);
        itemList.items = items;
    }
})();