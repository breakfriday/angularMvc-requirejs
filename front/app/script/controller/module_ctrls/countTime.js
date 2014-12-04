/**
 * Created by dupenghui on 2014/12/2.
 */
define(function (require) {
    var countTime = ["$scope", function ($scope) {

        var count = {
            init: function () {
                $scope.time = this.time = 1
                $scope.btn1 = "开始计时"
                this.event()
            },
            setTime: function (parm) {
                this.inter = window.setTimeout(function () {
                    this.time++
                    hour = parseInt(this.time / (10*60*60));// 小时数

                    min = parseInt(this.time /(60*10));// 分钟数
                    if(min>=60){
                        min=min%60
                    }

                    lastsecs = parseInt(this.time /10);
                    if(lastsecs>=60){
                        lastsecs=lastsecs%60
                    }

                   tt= this.time%10

                    $scope.time  = hour + ":" + min + ":" + lastsecs + "."+tt
                    $scope.$apply()
                    this.setTime()
                }.bind(this), 100)

            },
            stopTime: function () {
                window.clearTimeout(this.inter)
            },
            clearTime: function () {
                window.clearTimeout(this.inter)
                this.start = false
                $scope.btn1 = "开始计时"
                this.time=0
                $scope.time = 0
            },
            event: function () {
                $scope.startTime = function () {
                    if (!this.start) {
                        this.start = true
                        $scope.btn1 = "停止计时"
                        this.setTime()
                    } else {
                        this.start = false
                        $scope.btn1 = "开始计时"
                        this.stopTime()
                    }

                }.bind(this)

                $scope.clearTime = function () {
                    this.clearTime()
                }.bind(this)
            }
        }
        count.init()
    }]
    return countTime
})