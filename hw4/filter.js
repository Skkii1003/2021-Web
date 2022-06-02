function addImg(){
    var canvas = document.getElementById("img");
    var ctx = canvas.getContext("2d");
    var im = new Image();
    im.src = "img/1.png";
    im.width = canvas.width;
    im.height = canvas.height;
    im.onload = function(){
        ctx.drawImage(im, 0, 0, 650, 400);
    }
}

function addFilter1(){
    var canvas = document.getElementById("img");
    var filter = LenaJS["red"];
    LenaJS.redrawCanvas(canvas,filter);
}

function addFilter2(){
    var canvas = document.getElementById("img");
    var filter = LenaJS["green"];
    LenaJS.redrawCanvas(canvas,filter);
}
function addFilter3(){
    var canvas = document.getElementById("img");
    var filter = LenaJS["blue"];
    LenaJS.redrawCanvas(canvas,filter);
}
function addFilter4(){
    var canvas = document.getElementById("img");
    var filter = LenaJS["mirror"];
    LenaJS.redrawCanvas(canvas,filter);
}