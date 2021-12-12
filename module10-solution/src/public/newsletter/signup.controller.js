(function() {
    'use strict';
    angular.module('public')
        .controller('SignupController', signupController);
    signupController.$inject = ["MenuService"];

    function signupController(MenuService) {
        var ctrl = this;
        ctrl.user = {};
        ctrl.favorite = {};
        ctrl.signup = function(signupForm) {
            MenuService.getFavorite(ctrl.user.favoriteDish)
                .then(function(response) {
                    console.log(response.data);
                    ctrl.user.favoriteDish = response.data;
                    MenuService.saveUser(ctrl.user);
                })
        }
    }

})();