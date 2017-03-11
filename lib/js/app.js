'use strict';

(function (ng) {
    "use strict";

    ng.module('ToDontApp', ['LocalStorageModule']);
})(angular);
'use strict';

(function (ng) {
  "use strict";

  ng.module('ToDontApp').controller('AddController', function ($scope, ItemService, StorageService) {
    // $scope sets the 'scope' of a controller.  you can define the controller once in the html,
    // and don't need to alias it as nameCtrl.property

    $scope.item = {};
    $scope.allItems = ItemService.get() || [];

    $scope.addItem = function () {
      $scope.item.id = Date.now();
      ItemService.add($scope.item);
      // clearing out form by removing task property
      $scope.item = {};
      $scope.allItems = ItemService.get();
    };
  });
})(angular);
'use strict';

(function (ng) {
  "use strict";

  ng.module('ToDontApp').controller('ListController', function ($scope, ItemService, StorageService) {
    $scope.allItems = [];

    $scope.deleteItem = function (id) {
      ItemService.delete(id);
    };

    $scope.getItems = function () {
      // console.log(ItemService.get());
      $scope.allItems = ItemService.get();
      return $scope.allItems;
    };
  });
})(angular);
"use strict";

(function (ng) {
  "use strict";

  ng.module('ToDontApp').service("ItemService", function (StorageService) {
    var items = StorageService.get('tasks') || [];

    function add(item) {
      items.push(item);
      StorageService.set('tasks', items);
    }

    function deleteItem(id) {
      for (var i = 0; i < items.length; i++) {
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
'use strict';

(function (ng) {
  "use strict";

  ng.module('ToDontApp').service('StorageService', function (localStorageService) {
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
'use strict';

(function (ng) {
  "use strict";

  // always use camel case when declaring custom directive names
  // refer to the directive as word1-word2... in html

  ng.module('ToDontApp').directive('listItem', function () {
    return {
      // 'E' for element.  'A' for attribute.
      restrict: 'E',
      templateUrl: './templates/item.html'
    };
  });
})(angular);