function randomCanvas(){
  let c = document.querySelector("canvas");
  let ctx = c.getContext("2d");
  //let randomCanvas = Math.floor(Math.random()*2)+1
  let randomCanvas = 4
  console.log(randomCanvas)
  if (randomCanvas == 1) {
    ctx.fillStyle = "white";
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(258, 63);
    ctx.lineTo(136, 297);
    ctx.stroke();
    ctx.closePath();
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(135, 297);
    ctx.lineTo(392, 295);
    ctx.stroke();
    ctx.closePath();
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(259, 66);
    ctx.lineTo(393, 295);
    ctx.stroke();
    ctx.closePath();
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(258, 62);
    ctx.lineTo(393, 296);
    ctx.stroke();
    ctx.closePath();
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(244, 298);
    ctx.lineTo(245, 337);
    ctx.stroke();
    ctx.closePath();
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(246, 334);
    ctx.lineTo(273, 334);
    ctx.stroke();
    ctx.closePath();
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(273, 333);
    ctx.lineTo(273, 299);
    ctx.stroke();
    ctx.closePath();
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(275, 335);
    ctx.lineTo(275, 334);
    ctx.stroke();
    ctx.lineTo(275, 333);
    ctx.stroke();
    ctx.lineTo(275, 331);
    ctx.stroke();
    ctx.lineTo(275, 329);
    ctx.stroke();
    ctx.lineTo(275, 326);
    ctx.stroke();
    ctx.lineTo(275, 324);
    ctx.stroke();
    ctx.lineTo(275, 322);
    ctx.stroke();
    ctx.lineTo(275, 320);
    ctx.stroke();
    ctx.lineTo(275, 319);
    ctx.stroke();
    ctx.lineTo(275, 317);
    ctx.stroke();
    ctx.lineTo(275, 315);
    ctx.stroke();
    ctx.lineTo(275, 314);
    ctx.stroke();
    ctx.lineTo(275, 312);
    ctx.stroke();
    ctx.lineTo(275, 311);
    ctx.stroke();
    ctx.lineTo(275, 310);
    ctx.stroke();
    ctx.lineTo(275, 309);
    ctx.stroke();
    ctx.lineTo(275, 307);
    ctx.stroke();
    ctx.lineTo(275, 306);
    ctx.stroke();
    ctx.lineTo(275, 305);
    ctx.stroke();
    ctx.lineTo(275, 304);
    ctx.stroke();
    ctx.lineTo(275, 303);
    ctx.stroke();
    ctx.lineTo(275, 302);
    ctx.stroke();
    ctx.lineTo(275, 301);
    ctx.stroke();
    ctx.lineTo(275, 301);
    ctx.stroke();
    ctx.lineTo(275, 300);
    ctx.stroke();
    ctx.lineTo(275, 299);
    ctx.stroke();
    ctx.lineTo(275, 299);
    ctx.stroke();
    ctx.lineTo(275, 298);
    ctx.stroke();
    ctx.lineTo(275, 297);
    ctx.stroke();
    ctx.lineTo(275, 297);
    ctx.stroke();
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(275, 297);
    ctx.lineTo(275, 297);
    ctx.stroke();
    ctx.fill()
  }
  else if(randomCanvas==2){
    ctx.fillStyle="white";
    ctx.strokeStyle = '#000000';
    ctx.arc(300, 250, 192, 0, 6.283185307179586, false);
    ctx.stroke();
    ctx.fill()
  }
  // Rectangle
  else if(randomCanvas==3){
    ctx.fillStyle = "white";
    ctx.rect(50, 100, 500, 250);
    ctx.fill();
    ctx.strokeRect(50, 100, 500, 250);
  }
  // Bonhomme
  else if(randomCanvas==4){
    ctx.fillStyle = "white";
    ctx.strokeStyle="black";
    ctx.strokeRect(9, 14, 580, 475);
    ctx.rect(9, 14, 580, 475);
    ctx.fill();
    ctx.strokeStyle="black";
    ctx.strokeRect(41, 58, 207, 273);
    ctx.rect(41, 58, 207, 273);
    ctx.strokeStyle="black";
    ctx.strokeRect(276, 94, 268, 199);
    ctx.rect(276, 94, 268, 199);
    ctx.strokeRect(292, 149, 98, 89);
    ctx.rect(292, 149, 98, 89);
    ctx.strokeRect(60, 146, 94, 110);
    ctx.rect(60, 146, 94, 110);
    ctx.strokeRect(73, 355, 436, 99);
    ctx.rect(73, 355, 436, 99);

  }
}
