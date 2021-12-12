(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
  
  service.getFavorite = function (short_name) {
    return $http.get(ApiPath + '/menu_items/' + short_name + '.json');
  }

  service.saveUser = function () {
    //TODO: To write how tto save user
  }

  service.getUser = function () {
    //TODO: Return a user to here
  }

}



})();
