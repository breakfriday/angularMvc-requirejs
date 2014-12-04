/**
 * Created by dupenghui on 2014/12/4.
 */
define(function(require){
    require("angular")
    var webAppCtrl=angular.module("webApp.controllers",[]);
    var countTime=require("controller/module_ctrls/countTime")
    var dragCtrl=require("controller/module_ctrls/dragCtrl")
    webAppCtrl.controller({
        countTime:countTime,
        dragCtrl:dragCtrl

    })
    return webAppCtrl
})
