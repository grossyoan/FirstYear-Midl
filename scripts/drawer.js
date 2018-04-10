let canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false,
    drawCount = 0;

let x = "#fab1a0",
    y = 20;

function init() {
    console.log('test');
    canvas = document.getElementById('arcadeCanvas');
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;

    canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);

}
function draw() {   // dessins
  let pixelData = ctx.getImageData(currX, currY, 1, 1).data;
  if ((pixelData[0] == 255 && pixelData[1] == 255 && pixelData[2] == 255) || (pixelData[0] == 250 && pixelData[1] == 177 && pixelData[2] == 160)) {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
  }
  if (pixelData[0] == 255 && pixelData[1] == 255 && pixelData[2] == 255){
    drawCount+=1;
    console.log(drawCount);
  }
}
function findxy(res, e) { // position du curseur
    let pixelData = ctx.getImageData(currX, currY, 1, 1).data;
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag && pixelData[0] == 255 && pixelData[1] == 255 && pixelData[2] == 255) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            draw();
        }
    }
}
