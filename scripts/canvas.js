function randomCanvas(){
  let c = document.querySelector("canvas");
  let ctx = c.getContext("2d");
  let randomCanvas = Math.floor(Math.random()*2)+1
  console.log(randomCanvas)
  if (randomCanvas == 1) {
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
  else if (randomCanvas == 2){
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
}
