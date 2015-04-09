/**
 * Created by dupenghui on 2014/12/4.
 */
define(function (require) {
    var dragCtrl=["$scope",function($scope){
       var Draw={
           init:function(){
               this.cObj=document.getElementById("myCanvas").getContext("2d");
               this.event()
               this.draw.prototype=this
               this.p=new  this.draw(45,45,70,70,"red")
  /*             window.setTimeout(function(){
                   this.p.draw(45,145,70,70,"red")
               }.bind(this),2000)*/
           },
           draw:function(x,y,w,h,color){
               this.cObj.clearRect(this.x-1,this.y-1,this.w+2,this.h+2);
               this.x=x
               this.y=y
               this.w=w
               this.h=h
               this.color=color
               this.cObj.strokeStyle=this.color
               this.cObj.strokeRect(this.x,this.y,this.w,this.h);
           },
           OnMouseMove:function(evt){
               if(this.p.isDown){
                   var X=evt.layerX-this.p.w/2;
                   var Y=evt.layerY-this.p.h/2;
                   this.p.draw(X,Y,70,70,"red");
               }

           },
           OnMouseDown:function(evt){
               var X=evt.layerX;
               var Y=evt.layerY;
               if(X<this.p.x+this.p.w&&X>this.p.x)
               {
                   if(Y<this.p.y+this.p.h&&Y>this.p.y){
                       this.p.isDown=true;
                   }
               }
               else
               {
                  this.p.isDown=false;
               }
           },
           OnMouseUp:function(){
               this.p.isDown=false
           },
           event:function(){
               var canvas=document.getElementById("myCanvas")
               canvas.addEventListener("mousedown",this.OnMouseDown.bind(this),false);
               canvas.addEventListener("mousemove",this.OnMouseMove.bind(this),false);
               canvas.addEventListener("mouseup",this.OnMouseUp.bind(this),false);
           }
       }
        Draw.init()
    }]
    return dragCtrl
})