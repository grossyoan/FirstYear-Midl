$( document ).ready(function() {
  countDown();
});
$("#menuColor1").click(function(){ // Au lancement du mode arcade
  document.getElementById('clickSound').play();
  gameMode = 0;
  $("#gameSelection").css('position','static');
  $("#settingsImg").css('display','none');
  $("#settings").hide(300);
  $("#menuColor2").hide(200);
  random = randomCanvas();
  drawCanvas(random);
  $("#menuColor1").hide(200);
  setTimeout(function (){
    $("#arcade").toggle(300).css('background','#0984e3');
    $("#Go").toggle(300).css('background','#0984e3');
  }, 200);
  debWhite = countPixel();
  isDrawing==true;
  if(fromRestart==true){
    $("#arcadeCanvas").toggle(300).css('background','#0984e3');
  }
});
$("#menuColor2").click(function(){ // Au lancement du mode relax
  document.getElementById('clickSound').play();
  $("#settingsImg").css('display','none');
  gameMode = 1;
  $("#gameSelection").css('position','static');
  $("#settings").hide(300);
  $("#menuColor2").hide(200);
  random = randomCanvas();
  drawCanvas(random);
  $("#menuColor2").hide(200);
  $("#menuColor1").hide(200);
  setTimeout(function (){
    $("#Go span").css('color','black');
    $("#arcade").toggle(300).css('background','#fdcb6e');
    $("#Go").toggle(300).css('background','#fdcb6e');
  }, 200);
  debWhite = countPixel();
  isDrawing==true;
  if(fromRestart==true){
    $("#arcadeCanvas").toggle(300).css('background','#fdcb6e');
  }
});
$("#Go").click(function(){ // Au clic sur le canva
  if(gameMode==0){
    document.getElementById('arcadeMusic').play();
    timePassed=0;
    finished=false;
    $("#Go").hide();
    $("#myProgress").css('visibility', 'visible');
    init();
    progressBar();
    setTimeout(function (){
      if (timePassed>= 6 && timePassed<= 9 ){
        isFinished()
      }
      }, 7000);

  }
  else{
    document.getElementById('relaxMusic').play();
    timePassed=1;
    finished=false;
    $("#Go").hide();
    $("#myProgress").css('visibility', 'visible');
    $("#myBar").css('width',"0");
    init();
    $("#myProgress").toggle;
  }
});
$("#myProgress").click(function(){ // au clic sur la barre de progression
  isFinished();
});

$("#menuColor2").click(function(){ // au lancement du mode relax
  document.getElementById('clickSound').play();
  $("#menuColor1").hide(600);
  $("#menuColor2").hide(600);
  $("#relax").delay(600).toggle(500);
});

$("#homeButton").click(function(){ // Au retour au menu
  if(gameMode==1){
    relaxMusic();
  }
  document.getElementById('clickSound').play();
  $("#gameSelection").css('position','relative');
  $("#result").hide();
  $("#arcade").hide();
  $("#menuColor1").toggle(500);
  $("#menuColor2").toggle(500);
  $("#settings").toggle(500);

  fromRestart=true;
});

$("#nextButton").click(function(){ // Next level
  document.getElementById('clickSound').play();
  finished=false;
  random = randomCanvas()
  drawCanvas(random)
  $("#result").hide(300);
  setTimeout(function (){
    $("#arcadeCanvas").toggle(300);
    $("#Go").toggle(300);
  }, 200);
  debWhite = countPixel();
  isDrawing==true;
});

$("#retryButton").click(function(){ // Retry level
  document.getElementById('clickSound').play();
  drawCanvas(random)
  $("#result").hide(300);
  setTimeout(function (){
    $("#arcadeCanvas").toggle(300);
    $("#Go").toggle(300);
  }, 200);
  debWhite = countPixel();
  isDrawing==true;
});

$("#settingsButton").click(function(){ // Settings
  document.getElementById('clickSound').play();
  $("#settingsImg").toggle(300);
});

$("#orangeCircle").click(function(){ // Settings
  brushColor='#FFC312';
});
$("#greenCircle").click(function(){ // Settings
  brushColor='#C4E538';
});
$("#blueCircle").click(function(){ // Settings
  brushColor='#12CBC4';
});
$("#roseCircle").click(function(){ // Settings
  brushColor='#FDA7DF';
});
$("#redCircle").click(function(){ // Settings
  brushColor='#ED4C67';
});
