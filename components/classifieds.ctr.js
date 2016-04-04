(function(){

    "use strict";

    angular
        .module("ngClassifieds")
        .controller("classifiedsCtrl", function($scope){

            $scope.classified = {
                title:  "mp3 player",
                price:  "$100",
                url:    "http://nl.pcmweb.s3-eu-west-1.amazonaws.com/thumbnails/980/024d2/18973951_640.jpg",
                desc:   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deserunt impedit magni optio quisquam, quos suscipit ut. A ab amet culpa deleniti eum, explicabo illo iure, maxime omnis, possimus quae."
            }

        });
})();