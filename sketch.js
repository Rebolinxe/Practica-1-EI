//x,y, tamañoX, tamañoY
let y;
let xL;
let xR;
let xBola;
let yBola;
let escenaActual;
let velocitat;
let transparencia;
let rand1;
let rand2;
let rand3;

function mouseClicked() {
  if (escenaActual == 0) {
    escenaActual = 1;
  }
  else {
    escenaActual = 0;
  }
}

function deviceShaken(){
  if (escenaActual == 0) {
    escenaActual = 1;
  }
  else {
    escenaActual = 0;
  }
}


function setup() {
  createCanvas(450, 650);
  console.log("d");
  y = 0;
  xL = -120;
  xR = 300;
  xBola = 0;
  yBola = 0;
  escenaActual = 0;
  velocitat = 2;
  transparencia = 0;
  rand1 = int(random(20,236));
  rand2 = int(random(20,236));
  rand3 = int(random(20,236));

}

function draw() {
  if (escenaActual == 1) {
    background(0);
    stroke(255);
    fill(255);
    xBola++;
    yBola++;

    stroke(rand1,rand2,rand3);
    fill(rand1,rand2,rand3);

    
    if (xBola < 75) {
      ellipse(200 - xBola*velocitat, -50 + yBola*velocitat, 70, 70);//bien 1º 
    }
    else {
      ellipse(50, 100, 70, 70);//bien 1º   
    }
    if (xBola < 125) {
      ellipse(-50 + xBola*velocitat, 300 - yBola*velocitat, 70, 70);
    }
    else {
      ellipse(200, 50, 70, 70);//bien 2º
    }
    if (xBola < 175) {
      ellipse(400 - xBola*velocitat, -50 + yBola*velocitat, 70, 70);//bien 3º
    }
    else {
      ellipse(50, 300, 70, 70);//bien 3º
    }
    if (xBola < 175) {
      ellipse(525 - xBola*velocitat, -175 + yBola*velocitat, 70, 70);//bien 3º
    }
    else {
      ellipse(175, 175, 70, 70);//bien 3º
    }
    if (xBola < 225) {
      ellipse(-50 + xBola*velocitat, 500 - yBola*velocitat, 70, 70);//bien 4º
    }
    else {
      ellipse(400, 50, 70, 70);//bien 4º
    }
    if (xBola < 217.5) {
      ellipse(-200 + xBola*velocitat, 650 - yBola*velocitat, 70, 70);//bien 4º
    }
    else {
      ellipse(235, 215, 70, 70);//bien 4º
    }
    if (xBola < 242.5) {
      ellipse(-350 + xBola*velocitat, 800 - yBola*velocitat, 70, 70);//bien 4º  
    }
    else {
      ellipse(135, 315, 70, 70);//bien 4º  
    }
    if (xBola < 225) {
      ellipse(500 - xBola*velocitat, 50 + yBola*velocitat, 70, 70);//bien 5º
    }
    else {
      ellipse(50, 500, 70, 70);//bien 5º
    }
    if (xBola < 225) {
      ellipse(-50 + xBola*velocitat, 700 - yBola*velocitat, 70, 70);//bien 6º
    }
    else {
      ellipse(400, 250, 70, 70);//bien 6º
    }
    if (xBola < 250) {
      ellipse(-250 + xBola*velocitat, 900 - yBola*velocitat, 70, 70);//bien 6º
    }
    else {
      ellipse(250, 400, 70, 70);//bien 6º
    }
    if (xBola < 287.5) {
      ellipse(-450 + xBola*velocitat, 1100 - yBola*velocitat, 70, 70);//bien 6º
    }
    else {
      ellipse(125, 525, 70, 70);//bien 6º
    }
    if (xBola < 175) {
      ellipse(500 - xBola*velocitat, 250 + yBola*velocitat, 70, 70);//bien 7º
    }
    else {
      ellipse(150, 600, 70, 70);//bien 7º
    }
    if (xBola < 175) {
      ellipse(675 - xBola*velocitat, 75 + yBola*velocitat, 70, 70);//bien 7º
    }
    else {
      ellipse(325, 425, 70, 70);//bien 7º
    }
    if (xBola < 125) {
      ellipse(150 + xBola*velocitat, 700 - yBola*velocitat, 70, 70);//bien 8º
    }
    else {
      ellipse(400, 450, 70, 70);//bien 8º
    }
    if (xBola < 75) {
      ellipse(500 - xBola*velocitat, 450 + yBola*velocitat, 70, 70);//bien 9º
    }
    else {
      ellipse(350, 600, 70, 70);//bien 9º
    }


    // ellipse(50,100,70,70);//bien 1º 
    // ellipse(200,50,70,70);//bien 2º
    // ellipse(50,300,70,70);//bien 3º
    // ellipse(175,175,70,70);//bien 3º
    // ellipse(400,50,70,70);//bien 4º
    // ellipse(235,215,70,70);//bien 4º
    // ellipse(135,315,70,70);//bien 4º
    // ellipse(50,500,70,70);//bien 5º
    // ellipse(125,525,70,70);//bien 6º
    // ellipse(250,400,70,70);//bien 6º
    // ellipse(400,250,70,70);//bien 6º
    // ellipse(150,600,70,70);//bien 7º
    // ellipse(325,425,70,70);//bien 7º
    // ellipse(400,450,70,70);//bien 8º
    // ellipse(350,600,70,70);//bien 9º







    // stroke(0, 255, 0);
    // line(0, 150, 150, 0);
    // line(0, 250, 250, 0);
    // line(0, 350, 350, 0);
    // line(0, 450, 450, 0);
    // line(0, 550, 550, 0);
    // line(0, 650, 650, 0);
    // line(0, 750, 750, 0);
    // line(0, 850, 850, 0);
    // line(0, 950, 950, 0);





    //font = loadFont("Courier Prime");
    //textFont(font,16);

    //TEXTO ARRIBA
    textFont('Courier Prime');
    if (xBola > 287.5) {

      //TEXTO CENTRAL
      textSize(50);
      stroke(255);
      fill(255);
      if (y < 63) {
        text("R", 175, y++);
      }
      else {
        text("R", 175, 63);
      }
      if (y < 126) {
        text("É", 225, y++);
      }
      else {
        text("É", 225, 126);
      }
      if (y < 189) {
        text("S", 175, y++);
      }
      else {
        text("S", 175, 189);
      }
      if (y < 252) {
        text("O", 225, y++);
      }
      else {
        text("O", 225, 252);
      }
      if (y < 315) {
        text("N", 175, y++);
      }
      else {
        text("N", 175, 315);
      }
      if (y < 378) {
        text("A", 225, y++);
      }
      else {
        text("A", 225, 378);
      }
      if (y < 441) {
        text("N", 175, y++);
      }
      else {
        text("N", 175, 441);
      }
      if (y < 504) {
        text("C", 225, y++);
      }
      else {
        text("C", 225, 504);
      }
      if (y < 567) {
        text("E", 175, y++);
      }
      else {
        text("E", 175, 567);
      }
      if (y < 630) {
        text("S", 225, y++);
      }
      else {
        text("S", 225, 630);
      }

      // text("R", 175, 63);
      // text("É", 225, 126);
      // text("S", 175, 189);
      // text("O", 225, 252);
      // text("N", 175, 315);
      // text("A", 225, 378);
      // text("N", 175, 441);
      // text("C", 225, 504);
      // text("E", 175, 567);
      // text("S", 225, 630);

      if (y >= 315) {
        stroke(rand1+127.5, rand2+127.5, rand3+127.5);
        fill(rand1+127.5, rand2+127.5, rand3+127.5);
        textSize(16);
        xL++;
        if (xL < 5) {
          text("ELECTRONIC", xL*velocitat, 30);
          text("MUSIC", xL*velocitat, 45);
          text("FESTIVAL", xL*velocitat, 60);
          text("#7", xL*velocitat, 75);
        }
        else {
          text("ELECTRONIC", 10, 30);
          text("MUSIC", 10, 45);
          text("FESTIVAL", 10, 60);
          text("#7", 10, 75);
        }

        //TETO ABAJO

        xR--;
        textSize(12);
        if (xR > 186) {
          text("DU O7 AU IO", xR*velocitat, 580);
          text("NOVEMBER", xR*velocitat + 3, 595);
          text("DIJON", xR*velocitat + 35, 610);
          text("2013", xR*velocitat + 45, 625);
        }

        else {
          text("DU O7 AU IO", 370, 580);
          text("DIJON", 405, 610);
          text("NOVEMBER", 373, 595);
          text("2013", 415, 625);
        }
      }

      // text("DU O7 AU IO", 370, 580);
      // text("NOVEMBER", 373, 595); 
      // text("DIJON", 405, 610); 
      // text("2013", 415, 625); 

    }
  }
  else {
    background(0);
    y = 0;
    xL = -120;
    xR = 300;
    xBola = 0;
    yBola = 0;
    rand1 = int(random(0,256));
    rand2 = int(random(0,256));
    rand3 = int(random(0,256));
  }


}