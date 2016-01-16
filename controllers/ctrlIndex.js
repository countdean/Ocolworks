    havocApp.controller('profileController', function($scope, $http, $timeout) {
        (function tick() {
            $http.get('profile.json')
            .success(function(response) {
                $scope.user = response; 
                $timeout(tick, 1000);
            });
        })();
    });




    havocApp.controller('peopleController', function($scope, $http, $timeout) {
        (function tick() {
            $http.get('data.json')
            .success(function(response) {
                $scope.students = response;
                $timeout(tick, 1000); 
                
            });
        })();
    });

    havocApp.controller('navController', ['$rootScope', '$location', '$scope', 'userService', '$localStorage', function($rootScope, $location, $scope, userService, $localStorage) {
                     
        $rootScope.currentPath = $location.path();

        var checkpath = function() {
            $rootScope.currentPath = "/";
            $localStorage.linkStarto = "";
        }
            


    }]);
       