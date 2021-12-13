(function() {
    'use strict';
    angular.module('public')
        .controller('SignupController', signupController);

    signupController.$inject = ["MenuService"];
    function signupController(MenuService) {
        var ctrl = this;
        ctrl.isInValid = false;
        ctrl.signup = function(signupForm) {
            ctrl.signupSuccess = false;
            ctrl.isInvalidDish = false;

            MenuService.getFavorite(ctrl.user.favoriteDish)
                .then(function(response) {
                    console.log(response.data);
                    ctrl.temp = ctrl.user.favoriteDish;
                    ctrl.user.favoriteDish = response.data;
                    ctrl.signupSuccess = true;
                    console.log(ctrl.user);
                    MenuService.saveUser(ctrl.user);
                    ctrl.user.favoriteDish = ctrl.temp;
                })
                .catch(function (e){
                    ctrl.isInvalidDish = true;
                })
        }

        ctrl.validate = function() {
            MenuService.getFavorite(ctrl.user.favoriteDish)
                .then(function(response) {
                    console.log(response.data);
                    ctrl.isInValid = false;
                })
                .catch(function (e){
                    ctrl.isInValid = true;
                    console.log(ctrl.isInValid);
                })
        }
    }

})();