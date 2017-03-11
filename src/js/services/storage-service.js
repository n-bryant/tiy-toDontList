(function(ng) {
    "use strict";

    ng.module('ToDontApp').service('StorageService', function(localStorageService) {
      function setItems(key, value) {
        localStorageService.set(key, value);
      }

      function getItems(key) {
        return localStorageService.get(key);
      }

      return {
        set: setItems,
        get: getItems
      };
    });

})(angular);
