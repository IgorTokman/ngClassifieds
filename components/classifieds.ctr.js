(function(){

    "use strict";

    angular
        .module("ngClassifieds")
        //The main app controller
        .controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog){
            //Deferred result object
            classifiedsFactory.getClassifieds().then(function (classifieds) {
                $scope.classifieds = classifieds.data;
                $scope.categories = getCategories($scope.classifieds);
            });
            
            //Contact data that attaches to every card
            var contact = {
                "name":     "John Smith",
                "phone":    "+1234567890",
                "email":    "John@Smith.com"
            }

            //Shows the sidebar
            $scope.openSidebar = function(){
                $mdSidenav("left").open();
            }

            //Hides the sidebar
            $scope.closeSidebar = function(){
                $mdSidenav("left").close();
            }

            //Creates the new classified
            $scope.saveClassified = function(classified){
                if(classified) {
                    $scope.classified.contact = contact;
                    $scope.classifieds.push($scope.classified);
                    $scope.classified = {};
                    $scope.closeSidebar();
                    showToast("Classified Saved");
                }
            }

            //Edits the selected classified
            $scope.editClassified = function(classified){
                $scope.editing = true;
                $scope.openSidebar();
                $scope.classified = classified;

            }

            //Saves the changes in the selected classified
            $scope.saveEdit = function(){
                $scope.editing = false;
                $scope.classified = {};
                $scope.closeSidebar();
                showToast("Edit saved");
            }

            //Deletes the selected card from classified array
            $scope.deleteClassified = function(event, classified){
                var confirm = $mdDialog
                    .confirm()
                    .title("Are you sure you want to delete " + classified.title + "?")
                    .ok("Yes")
                    .cancel("No")
                    .targetEvent(event);
                //Deferred result object
                $mdDialog.show(confirm).then(function(){
                    var index = $scope.classifieds.indexOf(classified);
                    $scope.classifieds.splice(index, 1);
                }, function(){});
            }

            //Shows the information window
            function showToast(message){
                $mdToast.show(
                    $mdToast.simple()
                        .content(message)
                        .position('top, right')
                        .hideDelay(3000)
                );
            }

            //Fetches the array of the unique categories
            function getCategories(classifieds){
                var categories = [];

                angular.forEach(classifieds, function(item){
                    angular.forEach(item.categories, function(category){
                        categories.push(category);
                    });
                });
                //Works by using lodash library
                return _.uniq(categories);
            }
        });
})();