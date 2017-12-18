/**
 * Created by user on 2017/12/14.
 */
var canvasWidth=800;
var canvasHeight=600;

var canvas=document.getElementById("canvas");
var  context=canvas.getContext("2d");
canvas.width=canvasWidth;
canvas.height=canvasHeight;

var image=new Image();
image.src="Koala.jpg";
var clippingRegion={x:400, y:200, r:50};

image.onload=function(e){
    initCanvas();
}
function initCanvas(){
    draw(image,clippingRegion);
}
function setClippingRegion(clippingRegion){
    context.beginPath();
    context.arc(clippingRegion.x,clippingRegion.y,clippingRegion.r,0,2*Math.PI,false);
    context.clip();
}
function draw(image,clippingRegion){
    context.clearRect(0,0,canvas.width,canvas.height);
    context.save();
    setClippingRegion(clippingRegion);
    context.drawImage(image,0,0);
    context.restore();
}