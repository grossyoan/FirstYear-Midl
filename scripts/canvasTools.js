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
    finished = false;
    canvasNumber = 0;
    timePassed = 0;
    fromRestart = false;
    brushColor = "#FFC312",
    brushSize = 20;
    gameMode = 0;
    let arcadeSound=1;

function init() {
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
      ctx.strokeStyle = brushColor;
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
              ctx.fillStyle = brushColor;
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
       if (width >= 100 || finished==true) {
           clearInterval(id);
       } else {
           width= width+0.17;
           elem.style.width = width + '%';
       }
   }
}
/* Affichage du score*/
function displayScore(){
  let resultScore=document.querySelector('#resultScore');
  finalScore = Math.round((finalScore*10))/10;
  resultScore.innerHTML=finalScore+'%';
  let resultMessage=document.querySelector('#resultMessage');
  if(finalScore==50){
  resultMessage.innerHTML='Am I dreaming?!';
  }
  else if(finalScore<50 && finalScore>45 || finalScore>50 && finalScore<55){
  resultMessage.innerHTML='Congrats!';
  }
  else if(finalScore<45 && finalScore>40 || finalScore>55 && finalScore<60){
  resultMessage.innerHTML='Not bad!';
  }
  else if(finalScore<40 && finalScore>0 || finalScore>60 && finalScore<100){
  resultMessage.innerHTML='Ouch...';
  }
  else if(finalScore==0 || finalScore==100){
  resultMessage.innerHTML='Ow no...';
  }
}
/* Clear Canva */
function clearCanvas(){
  let c = document.querySelector("canvas");
  let ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);
}

function pause(milliseconds){
  let start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function isFinished(){
  if(finished==false){
    if(gameMode==0){
      $("#result").toggle(200).css('background','#0984e3');
      document.getElementById('arcadeMusic').pause();
      document.getElementById('arcadeMusic').currentTime=0;


    }
    else{
      $("#result").toggle(200).css('background','#fdcb6e');

    }
    scoreCount();
    displayScore();
    $("#myProgress").css('visibility','hidden');
    finished=true;
    setTimeout(function (){
      $("#arcadeCanvas").hide();
      clearCanvas();
      timePassed=1000;
    }, 500);

  }
  else{
    console.log('ok');
  }
}

function randomCanvas(){
  canvasNumber = Math.floor(Math.random()*5)+1;
  return canvasNumber
}


function countDown() {
  setInterval(function()
  {
    timePassed++;
    console.log(timePassed);
  },1000);
}

function randomArcadeSound(){
  arcadeSound = Math.floor(Math.random()*3)+1;
}

/*function arcadeMusic(){
  randomArcadeSound();
  if(arcadeSound==0){
    document.getElementById('ArcadeS1').play();
  }
  else if(arcadeSound==1){
    document.getElementById('ArcadeS2').play();
  }
  else{
    document.getElementById('ArcadeS3').play();

  }
}
*/

function relaxMusic(){
    $('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  });
}
