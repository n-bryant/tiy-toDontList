(function(ng) {
    "use strict";

    ng.module('ToDontApp').controller('ListController', function($scope, ItemService, StorageService) {
      $scope.allItems = [];

      $scope.deleteItem = function(id) {
        ItemService.delete(id);
      };

      $scope.getItems = function() {
        // console.log(ItemService.get());
        $scope.allItems = ItemService.get();
        return $scope.allItems;
      };
    });

})(angular);
