function randomCanvas(){
  let c = document.querySelector("canvas");
  let ctx = c.getContext("2d");
  let randomCanvas = Math.floor(Math.random()*5)+1;
  let previousCanvas=randomCanvas;
  if (randomCanvas == 1) {
    ctx.fillStyle="white";
    ctx.rect(150, 193, 323, 192);
    ctx.strokeRect(150, 193, 323, 192);
    ctx.rect(262, 148, 101, 46);
    ctx.strokeRect(262, 148, 101, 46);
    ctx.rect(100, 258, 50, 71);
    ctx.strokeRect(100, 258, 50, 71);
    ctx.rect(470, 258, 51, 74);
    ctx.strokeRect(470, 258, 51, 74);
    ctx.rect(260, 385, 0, 0);
    ctx.strokeRect(260, 385, 0, 0);
    ctx.rect(256, 385, 108, 47);
    ctx.strokeRect(256, 385, 108, 47);
    ctx.fill()
  }
  else if(randomCanvas==2){
  //Cercle
    ctx.fillStyle="white";
    ctx.arc(300, 250, 192, 0, 6.283185307179586, false);
    ctx.stroke();
    ctx.fill()
  }
  // Rectangle
  else if(randomCanvas==3){
    ctx.fillStyle = "white";
    ctx.rect(0, 70, 750, 350);
    ctx.fill();
    ctx.strokeRect(0, 70, 750, 350);
    ctx.stroke();
  }
  // Bonhomme
  else if(randomCanvas==4){
    ctx.fillStyle = "white";
    ctx.strokeStyle="black";
    ctx.strokeRect(9, 14, 580, 475);
    ctx.rect(9, 14, 580, 475);
    ctx.fill();
    ctx.strokeRect(41, 58, 207, 273);
    ctx.rect(41, 58, 207, 273);
    ctx.strokeRect(276, 94, 268, 199);
    ctx.rect(276, 94, 268, 199);
    ctx.strokeRect(292, 149, 98, 89);
    ctx.rect(292, 149, 98, 89);
    ctx.strokeRect(60, 146, 94, 110);
    ctx.rect(60, 146, 94, 110);
    ctx.strokeRect(73, 355, 436, 99);
    ctx.rect(73, 355, 436, 99);
  }
  else if(randomCanvas==5){
    ctx.fillStyle="white";
    ctx.beginPath();
    ctx.arc(310, 260, 225, 0, 6.283185307179586, false);
    ctx.stroke();
    ctx.fill();
    ctx.strokeRect(250, 310, 110, 75);
    ctx.strokeRect(300, 160, 139, 106);
    ctx.strokeRect(165, 310, 293, 118);
    ctx.strokeRect(150, 180, 127, 83);
    ctx.strokeRect(315, 205, 40, 51);
    ctx.strokeRect(205, 205, 28, 29);
  }
}
