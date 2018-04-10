let symbol
let color1
let color2
//Create a function that count the number of pixels of the symbol
function numberOfPixels{

}
numberOfPixels(symbol)

//create a function that permite to draw on the symbol
function color{

}
color(symbol)
numberOfPixels(color1)
numberOfPixels(color2)
//function score
function score {
  if (window.prompt ("vous avez gagné")){
    resultat = resultat + 1
    window.prompt(resultat)
  }
  else {
    window.prompt("Vous avez perdu" + resultat)
  }
}
//compare the heights of the differents parts of the symbol
function compare{
  if (numberOfPixels(color1) < numberOfPixels(color2)) {
    window.prompt("Vous avez perdu" + numberOfPixels(color1) + numberOfPixels(color2))
  }
  else if ((numberOfPixels(color1) > numberOfPixels(color2))) {
    window.prompt("Vous avez perdu" + numberOfPixels(color1) + numberOfPixels(color2))
  }
  else if ((numberOfPixels(color1) <= numberOfPixels(color2)))
//for the 2%
  {
    window.prompt("Vous avez gagné" + numberOfPixels(color1) + numberOfPixels(color2))
 }
  else if ((numberOfPixels(color1) >= numberOfPixels(color2)))
//if the 2%
  {
    window.prompt("Vous avez gagné" + numberOfPixels(color1) + numberOfPixels(color2))
  }
  else {
    window.prompt("Vous avez gagné" + numberOfPixels(color1) + numberOfPixels(color2))
  }
}
