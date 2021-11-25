(function() {
    'use strict';
  
    angular.module('MenuApp')
      .component('categories', {
        templateUrl: 'components/items.component.html',
        bindings: {
          items: '<'
        }
      });
  
  })();