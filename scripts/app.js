/**
 * Created by igortokman on 03.04.16.
 */
angular
    .module("ngClassifieds", ["ngMaterial", "ui.router"])
    .config(function($mdThemingProvider, $stateProvider) {
        //Changes the view
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('orange');

        $stateProvider
            .state('classifieds', {
                url: '/classifieds',
                templateUrl: 'components/classifieds/classifieds.tpl.html',
                controller: "classifiedsCtrl as vm"
            })
    });