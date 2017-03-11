(function(ng) {
    "use strict";

    ng.module('ToDontApp').controller('AddController', function($scope, ItemService, StorageService) {
      // $scope sets the 'scope' of a controller.  you can define the controller once in the html,
      // and don't need to alias it as nameCtrl.property

      $scope.item = {};
      $scope.allItems = ItemService.get() || [];

      $scope.addItem = function() {
        $scope.item.id = Date.now();
        ItemService.add($scope.item);
        // clearing out form by removing task property
        $scope.item = {};
        $scope.allItems = ItemService.get();
      };
    });

})(angular);
