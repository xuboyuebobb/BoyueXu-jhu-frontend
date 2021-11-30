(function() {
    'use strict';

    angular.module('MenuApp')
      .component('categoryList', {
        templateUrl: 'app/components/categories.component.html',
        bindings: {
          categories: '<'
        }
      });

  })();