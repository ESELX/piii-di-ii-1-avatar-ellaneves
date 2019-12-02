//Variáveis tipo let nomeDaVar;

function setup() { //código que só corre uma vez

  ///Não Apagar para Baixo até <<<
  var canvasDiv = document.getElementById('ex1');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,width*.75);
  console.log(sketchCanvas);
  sketchCanvas.parent('ex1');
  ///<<< Não fica a faltar createCanvas


}

function draw() { //código que corre em loop
  background(220);
    fill (90,70,60) // Red Green Blue 0 preto 255 branco
    square (90,90,220,80,80,20,20) // cabelo
    fill(255,202,150); //laranja fill cor do enchimento
    ellipse(200,200,190,190);
    fill (90,70,60);
    triangle (130, 105, 200, 105, 100, 190)
    fill (90,70,60);
    triangle (200, 105, 270, 105, 300, 190)

    fill (70);
    rect (120,160,75,65,20,20,30,30); //posiçao x, posiçao y, tamanho,pontos 0 - reto 255 - redondo
    fill(255,202,150);
    rect (125,165,65,57,20,20,30,30);
    fill (70);
    rect (205,160,75,65,20,20,30,30); //posiçao x, posiçao y, tamanho,pontos 0 - reto 255 - redondo
    fill(255,202,150);
    rect (210,165,65,57,20,20,30,30);
    fill(70)
    rect (190,180,15,5,0,0,0,0);



    fill(255)
    ellipse (160,190,47,30); //olho esq
    ellipse (240,190,47,30); //olho dt

    fill(80,180,200);
    ellipse (160,190,30,30); //iris esq
    ellipse (240,190,30,30); //iris dt

    fill(0)
    stroke (0);
    ellipse (160,190,10,10); //pupila esq
    ellipse (240,190,10,10); //pupila dt

    fill (255)
    ellipse (155,185,5,5); //luz esq
    fill (255);
    ellipse (235,185,5,5); //luz dt


    fill(255,202,150); //laranja fill cor do enchimento
    ellipse (193,230,10,10); // narina esq
    ellipse (207,230,10,10); //narina dt
    ellipse (200,230,15,15); //nariz

    noStroke (0);
    fill (255, 90, 90);
    arc(200, 255, 40, 40, 0, -450+ QUARTER_PI, CHORD);// boca

    stroke (255) //white255 preto 0 stroke dita a cor da linha strokeWeight
   // rect(width/2,height/2); = rect meio do canva

    noStroke()
    fill(255,202,150); //laranja fill cor do enchimento
    square(185,290, 30,0, 0, 0, 0); // pescoço
    fill(255,202,150)
    square(130,320,100,50,50,0,0); // braço esq
    fill(255,202,150)
    square(170,320,100,50,50,0,0); // braço dt
    fill(80,180,200);
    square(150,315,100,35,35,0,0); //posiçao x, posiçao y, tamanho,pontos 0 - reto 255 - redondo


}
