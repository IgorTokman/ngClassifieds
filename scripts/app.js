/**
 * Created by igortokman on 03.04.16.
 */
angular
    .module("ngClassifieds", ["ngMaterial"])
    .config(function($mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('orange')
    });