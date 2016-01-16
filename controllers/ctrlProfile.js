    havocApp.controller('fullprofileController', function($scope, $http, $timeout) {

            $http.get('https://frozen-wave-5827.herokuapp.com/sessions')
            .success(function(response) {
                $scope.user = response; 
                $timeout(tick, 1000);
                console.log(user.email);
            });


        (function tick2() {
            $http.get('jonproject.json')
            .success(function(response) {
                $scope.projectinfos = response; 
                $timeout(tick2, 1000);
            });
        })();
        (function tick3() {
            $http.get('jontask.json')
            .success(function(response) {
                $scope.taskinfos = response; 
                $timeout(tick3, 1000);
            });
        })();

        $scope.showtask="false";
    });