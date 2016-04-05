(function() {

    "use strict";

    angular
        .module("ngClassifieds")
        .controller("editClassifiedsCtrl", function ($state, $scope, $mdSidenav, $mdDialog, $timeout) {

            var vm = this;
            vm.classified = $state.params.classified;
            vm.closeSidebar = closeSidebar;
            vm.saveEdit= saveEdit;


            $timeout(function () {
                $mdSidenav("left").open();
            });

            $scope.$watch('vm.sidenavOpen', function (sidenav) {
                if(sidenav === false)
                    $mdSidenav('left').close().then(function () {
                        $state.go('classifieds');
                    })
            })

            function saveEdit(){
                $scope.$emit('editClassified', "Edit saved");
                vm.sidenavOpen = false;
            }

            function closeSidebar() {
                vm.sidenavOpen = false;
            }
        });
})();