(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.checkDishes = function () {
            var numDishes = 0;
            //TODO: Conunt the number of dishes here
            var listDish = $scope.listDishes;
            if (listDish) {
                var list = listDish.split(",");
                var count = 0; 
                for (var i = 0; i < list.length; ++i) {
                    if (list[i]){
                        count++; 
                    }
                }
                numDishes = count;
            }
            //TODO: Bbuild a message to show here $scope.message = xxx 
            $scope.message = returnMessage(numDishes);
        }     
        
        function returnMessage(count) {
            if (count === 0) {
                $scope.MyStyle = {
                    "border-style": "solid",
                    "border-color":"red",
                    "color":"red"
                }
                return "Please enter data first";
            } else if (count > 3) {  
                $scope.MyStyle = {
                    "border-style": "solid",
                    "border-color":"green",
                    "color":"green"
                }
                return "Too Much!"; 
            } else {
                $scope.MyStyle = {
                    "border-color":"green",
                    "border-style": "solid",
                    "color":"green"
                }
                return "Enjoy!";
            }
        }
    }
})();
    