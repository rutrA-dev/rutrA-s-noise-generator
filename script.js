var canvas = document.getElementById('maincanvas');
let check = document.getElementById("check");
check.checked = false;
canvas.width = 720;
canvas.height = 720;
let redRand;
let greenRand;
let blueRand;
let alphaRand;
var c = canvas.getContext("2d");
let realPixelSize = 16;
let pixelSize = 72;
let avgRed;
let avgGreen;
let avgBlue;
let avgAlpha;
var shittyCanva = document.getElementById('avgcolor');
shittyCanva.width = 200;
shittyCanva.height = 200;
var cShitty = shittyCanva.getContext("2d");


document.getElementById("butt").onclick = function randomshit (){
    
    
    c.fillStyle = "#ffffff";
    cShitty.fillStyle = "#ffffff";
    avgRed = 0;
    avgGreen = 0;
    avgBlue = 0;
    avgAlpha = 0;
    cShitty.fillRect(0,0,200,200);
    c.fillRect(0,0,720,720);
    if(document.getElementById("pxSize").value<=0){
        realPixelSize=45;
    }else{
        realPixelSize = 720/Number(document.getElementById("pxSize").value);
    }
    if(check.checked===false){
        for(var h = 0; h < 720; h+=realPixelSize){
            for(var w = 0; w < 720; w+=realPixelSize){
                redRand = Math.floor(Math.random()*255);
                avgRed += redRand;
                greenRand = Math.floor(Math.random()*255);
                avgGreen += greenRand;
                blueRand = Math.floor(Math.random()*255);
                avgBlue += blueRand;
                c.fillStyle = `rgb(${redRand},${greenRand},${blueRand})`;
                c.fillRect(w,h,realPixelSize,realPixelSize);

            }
        }
    }else{
        for(var h = 0; h < 720; h+=realPixelSize){
            for(var w = 0; w < 720; w+=realPixelSize){
                alphaRand = Math.random();
                c.fillStyle = `rgba(${0},${0},${0},${alphaRand})`;
                avgAlpha += alphaRand;
                c.fillRect(w,h,realPixelSize,realPixelSize);
            }
        }
    }
    if(check.checked===false){
        avgRed = avgRed/((720/realPixelSize)*(720/realPixelSize));
        avgGreen = avgGreen/((720/realPixelSize)*(720/realPixelSize));
        avgBlue = avgBlue/((720/realPixelSize)*(720/realPixelSize));
        cShitty.fillStyle = `rgb(${avgRed},${avgGreen},${avgBlue})`;
        cShitty.fillRect(0,0,200,200);
    }else{
        avgAlpha = avgAlpha/((720/realPixelSize)*(720/realPixelSize));
        cShitty.fillStyle = `rgba(${0},${0},${0},${avgAlpha})`;
        cShitty.fillRect(0,0,200,200);
    }
}