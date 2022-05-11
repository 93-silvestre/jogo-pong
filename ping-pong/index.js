//Variaveis da Bolinha
let xBall = 300;
let yBall = 200;
let d = 20;
let ray = d / 2;

//Velocidade da bolinha
let velocityXCircle = 6;
let velocityYCircle = 6;

//Variaveis da raquete do Jogador
let xR = 10;
let yR = 150;

//Comprimento e Altura das Raquetes
let racketLength = 10;
let heightRacket = 90;

//Variaveis da raquete do Oponente
let xROpponent = 585;
let yROpponent = 150;
let velocityYOpponent;


let collided = false;

//game score
let myPoints = 0;
let opponentPoints = 0;

let chanceOfError = 0;



//Função que desenha o background do jogo
function setup() {
  createCanvas(600, 400);
 
}

//Função que atualiza os frames e chama todas as outras funções
function draw() {
  background(0);
  ball();
  ballMoves();
  edgeCollision();
  racket(xR, yR);
  racket(xROpponent, yROpponent);
  racketMove();
  opponentRacketMove();
  collisionRackets(xR, yR);
  collisionRackets(xROpponent, yROpponent);
  includeScore();
  dotMark();



}

function ball() {
  circle(xBall, yBall, d);
}

function ballMoves() {
  xBall += velocityXCircle;
  yBall += velocityYCircle;

}

function edgeCollision() {

  if (xBall + ray > width || xBall - ray < 0) {
    velocityXCircle *= -1;

  }

  if (yBall + ray > height || yBall - ray < 0) {
    velocityYCircle *= -1;
  }
}

function racket(x, y) {
  rect(x, y, racketLength, heightRacket)

}


//Função que movimenta raquete quando pressiona as teclas do teclado para baixo e para cima
function racketMove() {

  if (keyIsDown(UP_ARROW)) {
    yR -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yR += 10;
  }

}

//Função que movimenta o adversário em Y sempre seguindo a posição da bolinha
function opponentRacketMove() {
  if(velocityYOpponent = yBall - yROpponent - racketLength / 2 -30){
    yROpponent += velocityYOpponent + chanceOfError;
    calculateChanceOfError();

  }
  
}


//Função que faz a bolinha colidir com a raquete
function collisionRackets(x, y) {
  collided = collideRectCircle(x, y, racketLength, heightRacket, xBall, yBall, ray);
  if (collided) {
    velocityXCircle *= -1;

  }
}

//Função para incluir pontuação no jogo
function includeScore(){
  stroke(255);
  textAlign(CENTER);
  textSize(20);
  fill(255,140,0);
  rect(140, 10, 50, 30);
  fill(255);
  text(myPoints, 165, 32);
  fill(255,140,0);
  rect(440, 10, 50, 30);
  fill(255);
  text(opponentPoints, 465, 32);
}

//Função para pontuar quando a bolinha passa da raquete
function dotMark(){
  if(xBall > 590 ){
    myPoints += 1;
  }
  if(xBall < 10){
    opponentPoints += 1;
  }
}

//Função para calcular chances do oponente errar 
function calculateChanceOfError() {
  if (opponentPoints >= myPoints) {
    chanceOfError += 1
    if (chanceOfError >= 30){
      chanceOfError = 50
    }
  } else {
    chanceOfError -= 1
    if (chanceOfError <= 25){
      chanceOfError = 35
    }
  }
}



