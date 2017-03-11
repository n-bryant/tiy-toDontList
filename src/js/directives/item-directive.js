(function(ng) {
  "use strict";

  // always use camel case when declaring custom directive names
  // refer to the directive as word1-word2... in html
  ng.module('ToDontApp').directive('listItem', function() {
    return {
      // 'E' for element.  'A' for attribute.
      restrict: 'E',
      templateUrl: './templates/item.html',
      // setting heading key for scope. '=' explicitly sets what values will be
      // scope: {
      //   heading: "=",
      //   id: "="
      // }
    }
  });
})(angular);
