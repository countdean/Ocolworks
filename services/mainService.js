havocApp.factory('userService', function($http, $q, $location, $rootScope, $localStorage) {
    var userService = {
        getUser: function(useremail, userpass) {
            var url = 'http://frozen-wave-5827.herokuapp.com/sessions',
        	config = {
                headers: {
                	'Content-Type': 'application/json'
            		}
            	}


        return $http.post(url, {email: useremail, password: userpass}, config).success(function(data, status) {
                if (data.status == "email not found or mismatch!") {
                    $rootScope.errormsg = "Incorrect email or password";

                } else {
                    
                    
                    $rootScope.currentPath = "/home";
                    $rootScope.bgcolor = "white";
                    $localStorage.linkStarto = data.user.id;
                    $location.path('/home');

                }
            })
            .error(function(){
                console.log("error");
            });
        },

        register: function(user, email, pass, passcon, mobilenumber) {
            var url = 'http://frozen-wave-5827.herokuapp.com/users',
            config = {
                headers: {
                    'Content-Type': 'application/json'
                    }
                }
        return $http.post(url, {"user":{name: user, email: email, password: pass, password_confirmation: passcon, phonenumber: mobilenumber }}, config).success(function(data, status) {  
                if (data.status == "failed") {
                    $rootScope.errorSignup = "Some fields are Incorrect";


                } else {
                    
                    $location.path('/home');
                    $localStorage.linkStarto = data.user.id;
                    $rootScope.currentPath = "/home";
                    $rootScope.bgcolor = "white";
      
                }       
                
            })
            .error(function(){
                console.log("error");
            });

        },

        createProject: function(name, desc, start, due) {
            var url = 'http://frozen-wave-5827.herokuapp.com/projects',
            config = {
                headers: {
                    'Content-Type': 'application/json'
                    }
                }
            var userID = $localStorage.linkStarto;
        return $http.post(url, {name: name, descriptions: desc, startDate: start, dueDate: due, user_id: userID, project_confirm:'Ongoing' }, config).success(function(data, status) {
            })
            .error(function(){
                console.log("error");
            });

        },

        showProject: function(callBack) {
            var userID = $localStorage.linkStarto;
            var url = 'http://frozen-wave-5827.herokuapp.com/users/' + userID + '.json';
        return $http.get(url).success(function(data) {
            callBack(data);
            })
            .error(function(){
                console.log("error");
            });

        },
        showTasks: function(callBackTasks) {
            var projID = $localStorage.projectID;
            var userID = $localStorage.linkStarto;
            var url = 'http://frozen-wave-5827.herokuapp.com/projects/' + projID + '.json';
        return $http.get(url).success(function(data) {
            
            callBackTasks(data);
            })
            .error(function(){
                console.log("error");
            });

        },
        showSubtasks: function(taskID, callBackSubTasks) {
            var url = 'http://frozen-wave-5827.herokuapp.com/tasks/' + taskID + '.json';
        return $http.get(url).success(function(data) {
            
            callBackSubTasks(data);
            })
            .error(function(){
                console.log("error");
            });

        }
    };

   

  return userService;
         
});