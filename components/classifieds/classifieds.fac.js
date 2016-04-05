(function(){

    "use strict";

    angular.module("ngClassifieds")
        //Loads data from a file by using the http service
        .factory("classifiedsFactory", function ($http) {

            function getClassifieds(){
                return $http.get("data/classifieds.json");
            }

            return{
                getClassifieds: getClassifieds
            }
        })
})();