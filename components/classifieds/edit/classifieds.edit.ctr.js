(function() {

    "use strict";

    angular
        .module("ngClassifieds")
        .controller("editClassifiedsCtrl", function ($state, $scope, $mdSidenav, $mdDialog, $timeout, classifiedsFactory) {

            var vm = this;
            vm.classifieds = classifiedsFactory.ref;
            vm.closeSidebar = closeSidebar;
            vm.saveEdit= saveEdit;
            vm.classified = vm.classifieds.$getRecord($state.params.id);

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
                vm.classifieds.$save(vm.classified).then(function () {
                    $scope.$emit('editClassified', "Edit saved");
                    vm.sidenavOpen = false;
                });
            }

            function closeSidebar() {
                vm.sidenavOpen = false;
            }
        });
})();