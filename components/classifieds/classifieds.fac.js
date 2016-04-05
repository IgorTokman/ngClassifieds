(function(){

    "use strict";

    angular.module("ngClassifieds")
        //Loads data from a file by using the http service
        .factory("classifiedsFactory", function ($http, $firebaseArray) {

            var ref =  new Firebase("https://ngappclassifieds.firebaseio.com/");

            return{
               ref: $firebaseArray(ref)
            }
        })
})();