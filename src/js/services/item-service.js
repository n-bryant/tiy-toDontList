(function(ng) {
    "use strict";

    ng.module('ToDontApp').service("ItemService", function(StorageService) {
      let items = StorageService.get('tasks') || [];

      function add(item) {
        items.push(item);
        StorageService.set('tasks', items);
      }

      function deleteItem(id) {
        for (let i = 0; i < items.length; i++) {
          if (items[i].id === id) {
            items.splice(i, 1);
          }
        }
        StorageService.set('tasks', items);
      }

      function get() {
        return items;
      }

      return {
        add: add,
        delete: deleteItem,
        get: get
      };
    });
})(angular);
