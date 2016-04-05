(function(){

    "use strict";

    angular
        .module("ngClassifieds")
        //The main app controller
        .controller("classifiedsCtrl", function($scope, $state, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog){

            var vm = this;

            vm.classifieds;
            vm.classified;
            vm.categories;
            vm.editing;

            vm.openSidebar = openSidebar;
            vm.closeSidebar = closeSidebar;
            vm.saveClassified = saveClassified;
            vm.editClassified = editClassified;
            vm.saveEdit = saveEdit;
            vm.deleteClassified = deleteClassified;


            //Deferred result object
            classifiedsFactory.getClassifieds().then(function (classifieds) {
                vm.classifieds = classifieds.data;
                vm.categories = getCategories(vm.classifieds);
            });
            
            //Contact data that attaches to every card
            var contact = {
                "name":     "John Smith",
                "phone":    "+1234567890",
                "email":    "John@Smith.com"
            }

            //Shows the sidebar
            function openSidebar(){
                $state.go("classifieds.new")
            }

            //Hides the sidebar
            function closeSidebar(){
                $mdSidenav("left").close();
            }

            //Creates the new classified
            function saveClassified(classified){
                if(classified) {
                    classified.contact = contact;
                    vm.classifieds.push(classified);
                    vm.classified = {};
                    closeSidebar();
                    showToast("Classified Saved");
                }
            }

            //Edits the selected classified
            function editClassified(classified){
                vm.editing = true;
                openSidebar();
                vm.classified = classified;

            }

            //Saves the changes in the selected classified
            function saveEdit(){
                vm.editing = false;
                vm.classified = {};
                closeSidebar();
                showToast("Edit saved");
            }

            //Deletes the selected card from classified array
            function deleteClassified(event, classified){
                var confirm = $mdDialog
                    .confirm()
                    .title("Are you sure you want to delete " + classified.title + "?")
                    .ok("Yes")
                    .cancel("No")
                    .targetEvent(event);
                //Deferred result object
                $mdDialog.show(confirm).then(function(){
                    var index = vm.classifieds.indexOf(classified);
                    vm.classifieds.splice(index, 1);
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