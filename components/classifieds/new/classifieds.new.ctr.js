(function() {

    "use strict";

    angular
        .module("ngClassifieds")
        .controller("newClassifiedsCtrl", function ($state, $scope, $mdSidenav, $mdDialog, $timeout, classifiedsFactory) {

            var vm = this;
            vm.closeSidebar = closeSidebar;
            vm.saveClassified = saveClassified;
            $timeout(function () {
                $mdSidenav("left").open();
            });

            $scope.$watch('vm.sidenavOpen', function (sidenav) {
                if(sidenav === false)
                    $mdSidenav('left').close().then(function () {
                        $state.go('classifieds');
                    })
            })

            function saveClassified(classified){
              if(classified){

                  classified.contact = {
                      "name":     "John Smith",
                      "phone":    "+1234567890",
                      "email":    "John@Smith.com"
                  }

                  $scope.$emit('newClassified', classified);
                  vm.sidenavOpen = false;
              }
            }
            
            function closeSidebar() {
                vm.sidenavOpen = false;
            }
        });
})();