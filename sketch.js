let numDiv 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
   
   //numDiv = map (mouseX,0,width,5,50);  for (i = 0; i < numDiv; i++) {line ((i+1)*width/numDiv,20, (i + 1)*width/numDiv, height-20);  } ==== Part 1 ==== lines that repeat themselves
  numDiv = 10; 
  for ( i=0; i < numDiv-1; i ++){ 
    for (j=0; j < numDiv-1; j++){ 
      ellipse ((i+1)*width/numDiv, (j+1)*height/numDiv,5); } } // === Part 2 === ellipse repetidas 
  // var posiçao x e var posiçao y posX e pos Y // var posX,posY

}