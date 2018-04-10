      /* PINCEAU */

let canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false,
    drawCount = 0;
    isDrawing = false;
    finalScore = 0;

let x = "#fab1a0",
    brushSize = 20;

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

if (isDrawing==false){
  function draw() {   // dessins
    let pixelData = ctx.getImageData(currX, currY, 1, 1).data;
    if ((pixelData[0] == 255 && pixelData[1] == 255 && pixelData[2] == 255) || (pixelData[0] == 253 && pixelData[1] == 203 && pixelData[2] == 110)) {
      ctx.beginPath();
      ctx.moveTo(prevX, prevY);
      ctx.lineTo(currX, currY);
      ctx.strokeStyle = x;
      ctx.lineWidth = brushSize;
      ctx.stroke();
      ctx.closePath();
    }
    /*if (pixelData[0] == 255 && pixelData[1] == 255 && pixelData[2] == 255){
      drawCount+=1;
      console.log(drawCount);
    }*/
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
}

/* Calcul de la surface blanche*/
let debWhite
let endWhite
function countPixel(img) {
  let canvas = document.getElementById('arcadeCanvas');
  let context = canvas.getContext('2d');
  let compteurBlanc = 0;
  let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  let data = imageData.data;
// Comptage de pixels
  let redAmount = new Array(256);
  let greenAmount = new Array(256);
  let blueAmount = new Array(256);
  for (let i = 0; i < 256; i++) {
    redAmount[i] = 0;
    greenAmount[i] = 0;
    blueAmount[i] = 0;
  }
  for (let i = 0; i < data.length; i += 4){
    if(data[i]==255 && data[i+1]==255 && data[i+2]==255){
      compteurBlanc++;
    }
  }
  return compteurBlanc;
}

/* Calcul des scores */
function scoreCount(){
  let endWhite = countPixel();
  finalScore = 100-(endWhite/debWhite)*100;
  console.log(finalScore)
}
function progressBar() {
   let elem = document.getElementById("myBar");
   let width = 1;
   let id = setInterval(frame, 10);
   function frame() {
       if (width >= 100) {
           clearInterval(id);
       } else {
           width= width+0.15;
           elem.style.width = width + '%';
       }
   }
}
/* Affichage du score*/
function displayScore(){
  let displayResult=document.querySelector('#result div');
  finalScore = Math.round((finalScore*10))/10;
  displayResult.innerHTML=finalScore+'%';
}
