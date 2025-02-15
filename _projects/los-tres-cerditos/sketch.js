//variables
let images = [];
let cambiar = 0;

function preload() {
  // Carga todas las imágenes
  images[0] = loadImage("img/parte1.jpg");
  images[1] = loadImage("img/parte2.jpg");
  images[2] = loadImage("img/parte3.jpg");
  images[3] = loadImage("img/parte4.jpg");
  images[4] = loadImage("img/parte5.jpg");
  images[5] = loadImage("img/parte6.jpg");
  images[6] = loadImage("img/parte7.jpg");
  images[7] = loadImage("img/final-alternatvo1.jpg");
  images[8] = loadImage("img/final-alternatvo2.jpg");
  images[9] = loadImage("img/final-alternatvo3.jpg");
  images[10] = loadImage("img/parte8.jpg");
}

function setup() {
  let canvas = createCanvas(635, 680);
  canvas.parent('div-sketch');

  updateButtons(); //configurar los botones iniciales
}

function draw() {
  background(255);
  image(images[cambiar], 0, 0, width, height);
}
//crear los botones
function updateButtons() {
  selectAll("button").forEach((btn) => btn.remove()); // Elimina los botones existentes

  if (cambiar === 0) {
    // Introducción
    let nextButton = createButton("Continuar");
    nextButton.position(424, 850);
    nextButton.mousePressed(() => changeSlide(1));
  } else if (cambiar > 0 && cambiar <= 3) {
    // Partes 1, 2, 3
    let backButton = createButton("Atrás");
    backButton.position(424, 850);
    backButton.mousePressed(() => changeSlide(cambiar - 1));

    let nextButton = createButton("Continuar");
    nextButton.position(470, 850);
    nextButton.mousePressed(() => changeSlide(cambiar + 1));
  } else if (cambiar === 4 || cambiar === 5) {
    // Partes 4, 5
    let backButton = createButton("Atrás");
    backButton.position(424, 850);
    backButton.mousePressed(() => changeSlide(cambiar - 1));

    let continueButton = createButton("Continuar");
    continueButton.position(470, 850);
    continueButton.mousePressed(() => changeSlide(cambiar + 1));

    let altEndingButton = createButton("Final alternativo");
    altEndingButton.position(540, 850);
    altEndingButton.mousePressed(() => changeSlide(7)); // Ir al primer final alternativo
  } else if (cambiar === 6) {
    // Parte 6
    let backButton = createButton("Atrás");
    backButton.position(424, 850);
    backButton.mousePressed(() => changeSlide(cambiar - 1));

    let continueButton = createButton("Continuar");
    continueButton.position(470, 850);
    continueButton.mousePressed(() => changeSlide(cambiar + 1));

     let altEndingButton1 = createButton("Final alternativo 1");
     altEndingButton1.position(540, 850);
     altEndingButton1.mousePressed(() => changeSlide(7)); // Ir al primer final alternativo

     let altEndingButton2 = createButton("Final alternativo 2");
     altEndingButton2.position(660, 850);
     altEndingButton2.mousePressed(() => changeSlide(8)); // Ir al segundo final alternativo

     let altEndingButton3 = createButton("Final alternativo 3");
     altEndingButton3.position(775, 850);
     altEndingButton3.mousePressed(() => changeSlide(9)); // Ir al tercer final alternativo
  } else if (cambiar === 7 || cambiar === 8 || cambiar === 9) {
    // Finales alternativos
    let backButton = createButton("Atrás");
    backButton.position(424, 850);
    backButton.mousePressed(() => changeSlide(cambiar - 1));

    let classicEndingButton = createButton("Final clásico");
    classicEndingButton.position(424, 850);
    classicEndingButton.mousePressed(() => changeSlide(10)); // Ir al final clásico
  }
}
//actualizar los botones
function changeSlide(newIndex) {
  cambiar = newIndex;
  updateButtons();
}
