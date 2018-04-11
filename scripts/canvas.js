function drawCanvas(randomCanvas){
  let c = document.querySelector("canvas");
  let ctx = c.getContext("2d");
  ctx.lineWidth = 5;
  if(randomCanvas == 1){
    //No name
    ctx.strokeStyle="black";
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
    ctx.strokeStyle="black";
    ctx.arc(300, 250, 192, 0, 6.283185307179586, false);
    ctx.stroke();
    ctx.fill()
  }
  // Carré
  else if(randomCanvas==3){
    ctx.strokeStyle="black";
    ctx.fillStyle = "white";
    ctx.strokeRect(97, 55, 424, 389);
    ctx.rect(97, 55, 424, 389);
    ctx.strokeRect(156, 121, 351, 307);
    ctx.rect(156, 121, 351, 307);
    ctx.strokeRect(417, 235, 2, 144);
    ctx.rect(417, 235, 2, 144);
    ctx.strokeRect(356, 300, 126, 1);
    ctx.rect(356, 300, 126, 1);
    ctx.strokeRect(201, 197, 117, 1);
    ctx.rect(201, 197, 117, 1);
    ctx.strokeRect(258, 148, 1, 107);
    ctx.rect(258, 148, 1, 107);
    ctx.fill();
  }
  // Rectangle
  else if(randomCanvas==4){
    ctx.strokeStyle="black";
    ctx.fillStyle = "white";
    ctx.rect(0, 70, 750, 350);
    ctx.strokeRect(0, 70, 750, 350);
    ctx.fill();
  }
  // Serpent
  else if(randomCanvas==5){
    ctx.strokeStyle="black";
    ctx.fillStyle = "white";
    ctx.strokeRect(232, 85, 128, 340);
    ctx.rect(232, 85, 128, 340);
    ctx.strokeRect(359, 85, 193, 74);
    ctx.rect(359, 85, 193, 74);
    ctx.strokeRect(43, 358, 186, 66);
    ctx.rect(43, 358, 186, 66);
    ctx.fill();
  }
  // E
  else if(randomCanvas==6){
    ctx.strokeStyle="black";
    ctx.fillStyle = "white";
    ctx.strokeRect(200, 99, 50, 296);
    ctx.rect(200, 99, 50, 296);
    ctx.strokeRect(200, 98, 177, 50);
    ctx.rect(200, 98, 177, 50);
    ctx.strokeRect(200, 393, 177, 50);
    ctx.rect(200, 393, 177, 50);
    ctx.strokeRect(200, 250, 154, 50);
    ctx.rect(200, 250, 154, 50);
    ctx.fill();
  }
  //F
  else if(randomCanvas==7){
    ctx.strokeStyle="black";
    ctx.fillStyle = "white";
    ctx.strokeRect(220, 82, 32, 376);
    ctx.rect(220, 82, 32, 376);
    ctx.strokeRect(220, 82, 266, 38);
    ctx.rect(220, 82, 266, 38);
    ctx.strokeRect(220, 246, 181, 36);
    ctx.rect(220, 246, 181, 36);
    ctx.fill();
  }
  // Bonhomme
  else if(randomCanvas==8){
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
  else if(randomCanvas==9){
    //Tête de con
    ctx.strokeStyle="black";
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
  else if(randomCanvas==10){
    //Chapeau de mexicain vu du dessus
    ctx.strokeStyle="black";
    ctx.fillStyle="white";
    ctx.strokeRect(169, 78, 301, 66);
    ctx.rect(169, 78, 301, 66);
    ctx.strokeRect(119, 78, 50, 250);
    ctx.rect(119, 78, 50, 250);
    ctx.strokeRect(470, 78, 50, 250);
    ctx.rect(470, 78, 50, 250);
    ctx.strokeRect(169, 262, 301, 66);
    ctx.rect(169, 262, 301, 66);
    ctx.fill();
  }
  else if(randomCanvas==11){
    //Pièce montée ?
    ctx.strokeStyle="black";
    ctx.fillStyle="white";
    ctx.strokeRect(20, 468, 561, 25);
    ctx.rect(20, 468, 561, 25);
    ctx.strokeRect(41, 424, 523, 43);
    ctx.rect(41, 424, 523, 43);
    ctx.strokeRect(81, 359, 446, 63);
    ctx.rect(81, 359, 446, 63);
    ctx.strokeRect(116, 284, 382, 75);
    ctx.rect(116, 284, 382, 75);
    ctx.strokeRect(150, 201, 314, 82);
    ctx.rect(150, 201, 314, 82);
    ctx.strokeRect(179, 111, 256, 91);
    ctx.rect(179, 111, 256, 91);
    ctx.strokeRect(218, 9, 178, 102);
    ctx.rect(218, 9, 178, 102);
    ctx.fill();
  }
  else if(randomCanvas==12){
    //Pablo Picasso ?
    ctx.strokeStyle="black";
    ctx.fillStyle="white";
    ctx.strokeRect(17, 20, 369, 318);
    ctx.rect(17, 20, 369, 318);
    ctx.strokeRect(48, 55, 386, 336);
    ctx.rect(48, 55, 386, 336);
    ctx.strokeRect(89, 110, 397, 330);
    ctx.rect(89, 110, 397, 330);
    ctx.strokeRect(138, 170, 433, 312);
    ctx.rect(138, 170, 433, 312);
    ctx.fill();
  }
  else if(randomCanvas==13){
    //Coucou ça rend fou
    ctx.strokeStyle="black";
    ctx.fillStyle="white";
    ctx.strokeRect(23, 25, 557, 451);
    ctx.rect(23, 25, 557, 451);
    ctx.strokeRect(48, 51, 503, 397);
    ctx.rect(48, 51, 503, 397);
    ctx.strokeRect(23, 25, 557, 451);
    ctx.rect(23, 25, 557, 451);
    ctx.strokeRect(75, 79, 452, 346);
    ctx.rect(75, 79, 452, 346);
    ctx.strokeRect(100, 104, 403, 295);
    ctx.rect(100, 104, 403, 295);
    ctx.strokeRect(128, 131, 349, 242);
    ctx.rect(128, 131, 349, 242);
    ctx.strokeRect(151, 157, 301, 191);
    ctx.rect(151, 157, 301, 191);
    ctx.strokeRect(173, 177, 256, 151);
    ctx.rect(173, 177, 256, 151);
    ctx.strokeRect(196, 199, 211, 109);
    ctx.rect(196, 199, 211, 109);
    ctx.strokeRect(213, 218, 175, 71);
    ctx.rect(213, 218, 175, 71);
    ctx.strokeRect(230, 232, 142, 40);
    ctx.rect(230, 232, 142, 40);
    ctx.strokeRect(248, 243, 107, 15);
    ctx.rect(248, 243, 107, 15);
    ctx.fill();
  }
  else if(randomCanvas==14){
    //Damier
    ctx.strokeStyle="black";
    ctx.fillStyle="white";
    ctx.strokeRect(73, 56, 140, 111);
    ctx.rect(73, 56, 140, 111);
    ctx.strokeRect(212, 166, 159, 120);
    ctx.rect(212, 166, 159, 120);
    ctx.strokeRect(372, 55, 134, 109);
    ctx.rect(372, 55, 134, 109);
    ctx.strokeRect(76, 285, 135, 106);
    ctx.rect(76, 285, 135, 106);
    ctx.strokeRect(371, 285, 139, 112);
    ctx.rect(371, 285, 139, 112);
    ctx.fill();
  }
}
