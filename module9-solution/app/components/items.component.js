(function() {
    'use strict';
  
    angular.module('MenuApp')
      .component('itemList', {
        templateUrl: 'app/components/items.component.html',
        bindings: {
          items: '<'
        }
      });
  
  })();