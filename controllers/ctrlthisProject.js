    havocApp.controller('thisProject', ['$scope', '$routeParams', 'userService', '$timeout', '$localStorage', function($scope, $routeParams, userService, $timeout, $localStorage) {
        

        $scope.projectID = $routeParams.projectID;
        $localStorage.projectID = $scope.projectID;


    		var showTasks = function() {
    			userService.showTasks(function(data){
                $scope.proj = data;
      			$scope.tasks = data.tasks;
                $scope.subtasks = data.subtasks;
                $localStorage.taskID = data.tasks[0].id;
                console.log(data);
    			});
    		}
    		showTasks();








    }]);