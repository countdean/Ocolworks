// script.js

   
        // also include ngRoute for all our routing needs
    var havocApp = angular.module('havocApp', ['ngRoute', 'ngStorage']);

    // configure our routes
    havocApp.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'pages/session.html',
                controller  : 'loginController'
            })

            .when('/home', {
                templateUrl : 'pages/home.html',
                controller  : 'homeController',
                resolve:{
                    check:function($localStorage, $location){   
                        if($localStorage.linkStarto == null){ 
                            $location.path('/');
                        }else if($localStorage.linkStarto == ""){
                            $location.path('/');
                        }else{
                            $location.path('/home');
                        }
                    }
                }       
            })

            .when('/project', {
                templateUrl : 'pages/project.html',
                controller  : 'projectController',
                resolve:{
                    check:function($localStorage, $location){   
                        if($localStorage.linkStarto == null){ 
                            $location.path('/');
                        }else if($localStorage.linkStarto == ""){
                            $location.path('/');
                        }else{
                            $location.path('/project');
                        }
                    }
                }   
            })

            .when('/nav', {
                templateUrl : 'pages/navAndSideBar.html',
                controller  : '',
                resolve:{
                    check:function($localStorage, $location){   
                        if($localStorage.linkStarto == null){ 
                            $location.path('/');
                        }else if($localStorage.linkStarto == ""){
                            $location.path('/');
                        }else{
                            $location.path('/nav');
                        }
                    }
                }   
            })

            .when('/profile', {
                templateUrl : 'pages/profile.html',
                controller  : 'fullprofileController',
                resolve:{
                    check:function($localStorage, $location){   
                        if($localStorage.linkStarto == null){ 
                            $location.path('/');
                        }else if($localStorage.linkStarto == ""){
                            $location.path('/');
                        }else{
                            $location.path('/profile');
                        }
                    }
                }   
            })

            .when('/:projectID', {
                templateUrl : 'pages/thisProject.html',
                controller  : 'thisProject',
                resolve:{
                    check:function($localStorage, $location){   
                        if($localStorage.linkStarto == null){ 
                            $location.path('/');
                        }else if($localStorage.linkStarto == ""){
                            $location.path('/');
                        }else{
                            
                        }
                    }
                }   
            });
    });








