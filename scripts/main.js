$("#menuColor1").click(function(){ // Au lanement du mode arcade
  $("#menuColor2").hide(600);
  $("#menuColor1").hide(600);
  $("#arcade").delay(600).toggle(500);
  $("#Go").delay(600).toggle(1000);
  randomCanvas();
  debWhite = countPixel();
});
$("#Go").click(function(){ // Au clic sur le canva
  if (isDrawing==false){
    $("#Go").hide();
    init();
    setTimeout(function (){
      scoreCount();
      displayScore();
      $("#result").toggle(500);
      $("#myProgress").hide(200);
    }, 7000);
    progressBar();
    isDrawing=true;
  }
});
$("#myProgress").click(function(){ // au clic sur la barre de progression
  scoreCount();
  displayScore();
  $("#result").toggle(500);
  $("#myProgress").hide(200);
});
$("#menuColor2").click(function(){ // au lancement du mode relax
  $("#menuColor1").hide(600);
  $("#menuColor2").hide(600);
  $("#relax").delay(600).toggle(500);
});
