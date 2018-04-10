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
  console.log(compteurBlanc)
}
