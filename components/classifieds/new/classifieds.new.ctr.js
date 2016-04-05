(function() {

    "use strict";

    angular
        .module("ngClassifieds")
        .controller("newClassifiedsCtrl", function ($mdSidenav, $mdDialog, $timeout, classifiedsFactory) {

            var vm = this;

            $timeout(function () {
                $mdSidenav("left").open();
            });
        });
})();