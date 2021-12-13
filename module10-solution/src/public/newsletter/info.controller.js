(function() {
    'use strict';
    angular.module('public').controller('InfoController', infoController);

    infoController.$inject = ["MenuService"];

    function infoController(MenuService) {
        var ctrl = this;
        ctrl.isEmpty = true; //display
        console.log(MenuService.getUser());
        ctrl.user = MenuService.getUser();
        console.log("Get User Property from the Service + ", ctrl.user);
        if (Object.keys(ctrl.user).length == 0) {
            ctrl.isEmpty = true;
        } else {
            ctrl.isEmpty = false;
        }
    }
})();