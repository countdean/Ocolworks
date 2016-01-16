    havocApp.controller('homeController', ['$scope', 'userService', '$timeout', function($scope, userService, $timeout) {
    	
       
        

    (function tick2() {
    	var getFnc = function() {
    		userService.showProject(function(data){
      		$scope.projects = data.projects;
      		$timeout(tick2, 1000);
    	});
    	}
    	getFnc();

    })();

    	

    	$scope.showModal = function() {
    	 	$('#modal1').openModal();
        }

        $scope.createProject = function() {
            var datenow = new Date();
    	 	userService.createProject($scope.pName, $scope.pDesc, datenow, $scope.pDue);
    	 	$('#modal1').closeModal();

            $scope.pName ="";
            $scope.pDesc ="";
            $scope.pDue ="";
    	 	
        }

        $scope.switchVal2="false";
        $scope.switchFnc2 = function() {
            if ($scope.switchVal2 == "false"){
                $scope.switchVal2="true";
            }else {
                $scope.switchVal2="false";
            }

            if ($scope.switchVal2 == "true" && $scope.switchVal3 == "true" ){
                $('#switch3').prop('checked', false);
                $scope.switchVal3="false";
            }else {
                
            }
        }

        $scope.switchVal3="false";
        $scope.switchFnc3 = function() {
            if ($scope.switchVal3 == "false"){
                $scope.switchVal3="true";
            }else {
                $scope.switchVal3="false";
            }

            if ($scope.switchVal3 == "true" && $scope.switchVal2 == "true" ){
                $('#switch2').prop('checked', false);
                $scope.switchVal2="false";
            }else {
                
            }
        }


        $scope.switchValtxt="false";
        $scope.switchVal=true;
        $scope.switchVali=false;
        $scope.switchVali2=false;
        $scope.statusCompleted="Completed";
        $scope.switchFnc = function() {
            if ($scope.switchVal == false){
                $scope.switchVal=true;
                $scope.switchVali=false;
            }else {
                $scope.switchVal=false;
                $scope.switchVali=true;

            }


            if ($scope.switchValtxt == "false"){
                $scope.switchValtxt="true";
            }else {
                $scope.switchValtxt="false";
            }

            if ($scope.switchValtxt == "true" && $scope.switchValtxt1 == "true" ){
                $('#switch1').prop('checked', false);
                $scope.switchValtxt1="false";
                $scope.switchVal=false;
                $scope.switchVali2=false;
                $scope.switchVali=true;
            }else {
                
            }


        }


        $scope.switchValtxt1="false";
        $scope.statusOngoing="Ongoing";
        $scope.switchFnc1 = function() {
            if ($scope.switchVal == false){
                $scope.switchVal=true;
                $scope.switchVali2=false;
            }else {
                $scope.switchVal=false;
                $scope.switchVali2=true;

            }


            if ($scope.switchValtxt1 == "false"){
                $scope.switchValtxt1="true";
            }else {
                $scope.switchValtxt1="false";
            }

            if ($scope.switchValtxt1 == "true" && $scope.switchValtxt == "true" ){
                $('#switch').prop('checked', false);
                $scope.switchValtxt="false";
                $scope.switchVal=false;
                $scope.switchVali=false;
                $scope.switchVali2=true;
            }else {
                
            }

        }







    }]);