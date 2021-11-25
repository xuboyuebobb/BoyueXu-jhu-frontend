(function() {
    'use strict';
  
    angular.module('MenuApp')
      .component('categories', {
        templateUrl: 'components/categories.component.html',
        bindings: {
          items: '<'
        }
      });
  
  })();