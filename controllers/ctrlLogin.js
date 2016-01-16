    havocApp.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    //Remove the header containing XMLHttpRequest used to identify ajax call 
    //that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];


});

    havocApp.controller('loginController', ['$rootScope', '$scope', '$http', 'userService', '$location', '$localStorage', function($rootScope, $scope, $http, userService, $location, $localStorage) {
        $rootScope.bgcolor = "#2196f3";
        $rootScope.currentPath = "/";
    	$scope.loginbtn = "true";
    	$scope.signupbtn ="true";

        $localStorage.linkStarto = "";
        $scope.sendPost = function() {
            userService.getUser($scope.email, $scope.password);

            
        
            
        } 

        $scope.signupUser = function() {
            userService.register($scope.newName, $scope.newEmail, $scope.newPassword, $scope.newPasswordCon, $scope.newNumber);
           
        }


    }]);