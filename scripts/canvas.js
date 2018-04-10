function randomCanvas(){
  let c = document.querySelector("canvas");
  let ctx = c.getContext("2d");
  //let randomCanvas = Math.floor(Math.random()*2)+1
  let randomCanvas = 3
  console.log(randomCanvas)
  if (randomCanvas==1) {
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fillStyle = "white";
    ctx.fill();
    // Triangle filaire
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
  }
  else if (randomCanvas==2){
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fillStyle = "white";
    ctx.fill();
  }
  else if(randomCanvas==3){
    ctx.fillStyle = "white";
    ctx.rect(50, 100, 500, 250);
    ctx.fill();
    ctx.strokeRect(50, 100, 500, 250);
  }
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
