(function () {
    "use strict";

    angular.module("ShoppingListCheckOff", [])
        .controller("ToBuyController", ToBuyController)
        .controller("AlreadyBoughtController", AlreadyBoughtController)
        .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

    
    ToBuyController.$inject= ["ShoppingListCheckOffService"];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.items = ShoppingListCheckOffService.getToBuy();
        toBuy.move = function(i) {
            ShoppingListCheckOffService.move(i);
        };
    }



    AlreadyBoughtController.$inject= ["ShoppingListCheckOffService"];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.items = ShoppingListCheckOffService.getBought();
    }




    function ShoppingListCheckOffService(){
        var service = this;
        var toBuy = [
            {name: "cookies", quantity: 1, pricePerItem: 1 },
            {name: "tea", quantity: 2, pricePerItem: 2},
            {name: "coffee", quantity: 3, pricePerItem: 3},
            {name: "flowers", quantity: 4, pricePerItem: 4},
            {name: "cans", quantity: 5, pricePerItem: 5}
        ];
        var bought = [];

        service.getToBuy = function () {
            return toBuy;
        };

        service.getBought = function () {
            return bought;
        };
        // When the user clicks on the "Bought" button, simply pass the call
        // from your (ng-click) controller-bound method to call the
        // right method inside of your ShoppingListCheckOffService service,
        // which removes that item from the "to buy" array and pushes it to the "bought" array.
        service.move = function (i){
            var toBuyItem = toBuy[i];
            bought.push(toBuyItem);
            toBuy.splice(i,1);
        };
    }
})();