(function() {
  'use strict'
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.items = '';
    $scope.message = '';
      $scope.checkItems = function(){
        let items = $scope.items;
        if(!items){
          $scope.message = 'Please enter data first';
          return;
        }
      //  console.log(items);
        $scope.message = items;
        let parts = items.split(',');
        if(parts.length >3 ){
          $scope.message = "Too much";
        } else {
          $scope.message = "Enjoy!";
        }

        return 'items';
      }

  }


})();
