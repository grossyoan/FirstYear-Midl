$("#menuColor1").click(function(){
  $("#menuColor2").hide(600);
  $("#menuColor1").hide(600);
  $("#arcade").delay(600).toggle(500);
  randomCanvas();
  init();
  countPixel();

});
$("#menuColor2").click(function(){
  $("#menuColor1").hide(600);
  $("#menuColor2").hide(600);
  $("#relax").delay(600).toggle(500);
});
