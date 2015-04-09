/**
 * Created by dupenghui on 2014/12/2.
 */
define(function(require){
    alert(1)
    var angular= require("angular")
    var controllers=require("controller/controllers")
    /*var ngRoute=require("angularRoute")*/
    var ngSanitize=require("angularSanitize")
    var  ngRoute=require("angularRoute")
    var webApp=angular.module("webApp",["ngRoute","ngSanitize",controllers.name])
    var template=require("text!view/template.html")

    //webApp.config(["$stateProvider","$urlRouterProvider",function($stateProvider, $urlRouterProvider){
    //    $urlRouterProvider.otherwise("/state1");
    //    //
    //    // Now set up the states
    //    $stateProvider
    //        .state('state1', {
    //            url: "/state1",
    //            templateUrl: "view/counttime.html"
    //        })
    //        .state('state2', {
    //            url: "/state2",
    //            templateUrl: "view/counttime2.html"
    //        })
    //}])

    webApp.config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
                $routeProvider
                    .when('/state1', {
                        templateUrl: 'view/counttime.html',

                    })
                    .when('/state2', {
                        templateUrl: 'view/counttime2.html',

                    });

                //$locationProvider.html5Mode(true);
            }])





    webApp.run(["$templateCache",function($templateCache) {
        var template=require("text!view/template.html")
        template=$(template)
        for(var i=0 ; i<template.length;i++){
            var id=template[i]["id"]
            var tpl=$(template[i]).html()
            if(id){
                $templateCache.put(id,tpl);
            }
        }
    }]);
    return webApp
})