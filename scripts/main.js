$("#menuColor1").click(function(){ // Au lancement du mode arcade
  $("#menuColor2").hide(200);
  randomCanvas();
  $("#menuColor2").hide(200);
  $("#menuColor1").hide(200);
  setTimeout(function (){
    $("#arcade").toggle(300);
    $("#Go").toggle(300);
  }, 200);
  debWhite = countPixel();
  isDrawing==true;
});
$("#Go").click(function(){ // Au clic sur le canva
  finished=false;
  if (isDrawing==false){
    $("#Go").hide();
    $("#myProgress").css('visibility', 'visible');
    init();
    progressBar();
    setTimeout(function (){
      isFinished();
    }, 7000);
  }
  else{
  }
});
$("#myProgress").click(function(){ // au clic sur la barre de progression
  isFinished();
});

$("#menuColor2").click(function(){ // au lancement du mode relax
  $("#menuColor1").hide(600);
  $("#menuColor2").hide(600);
  $("#relax").delay(600).toggle(500);
});

$("#homeButton").click(function(){ // Au retour au menu
  $("#result").hide();
  $("#arcade").hide();
  $("#menuColor1").toggle(500);
  $("#menuColor2").toggle(500);
});

$("#nextButton").click(function(){ // Next level
  finished=false;
  randomCanvas();
  $("#result").hide(300);
  setTimeout(function (){
    $("#arcadeCanvas").toggle(300);
    $("#Go").toggle(300);
  }, 200);
  debWhite = countPixel();
  isDrawing==true;
});

$("#retryButton").click(function(){ // Retry level
  randomCanvas();
  $("#result").hide(300);
  setTimeout(function (){
    $("#arcadeCanvas").toggle(300);
    $("#Go").toggle(300);
  }, 200);
  debWhite = countPixel();
  isDrawing==true;
});

$("#settingsButton").click(function(){ // Settings
  $("#settings").toggle(300);
});
