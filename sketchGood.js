// SETTINGS
"use strict";
let squareSize=10;
let scale=40;
let speed=10;
let size=squareSize*scale;

// VARIABLES
let i, j = 0;
let direction;
let score = 0;
let length = 1;
let food = new pixel(95,125);
let head = new pixel(195,205);
let turningPoint = new pixel(0,0);
let good = new Array(scale);
let pix = new Array(scale);
let tail = new Array();

// FUNCTIONS
function turnLeft(){
  if (direction==2||direction==0){
    direction=0;
  }
  else{
  let nw =tail.pop();
  let poped = new pixel(tail[0].x-10, turningPoint.y);
  tail.unshift(poped);
  }
}
function turnRight(){
  if (direction==1||direction==0){
    direction=0;
  }
  else{
  let nw =tail.pop();
  let poped = new pixel(tail[0].x+10, turningPoint.y);
  tail.unshift(poped);
  }
}
function turnUp(){
  if (direction==4||direction==0){
    direction=0;
  }
  else{
  let nw =tail.pop();
  let poped = new pixel(turningPoint.x, tail[0].y-10);
  tail.unshift(poped);
  }
}
function turnDown(){
  if (direction==3||direction==0){
    direction=0;
  }
  else{
  let nw =tail.pop();
  let poped = new pixel(turningPoint.x, tail[0].y+10);
  tail.unshift(poped);
  }
}
function center(x){
  if(((x-5)%5==0)&&!(x%10==0)) return true; 
  else return false;
}
function balanceNumber(x){
  let aux=x,i;
  while(!center(aux)){
    aux++;
  }
  return aux;
}
function auxStringMaker(){
  for(i=5;i<=395;i++)
    if (center(i))
      good.push(i);
}
function outSide(param){
  if (param.x>395)
    param.x=5;
  if (param.x<5)
    param.x=395;
  if (param.y>395)
    param.y=5;
  if (param.y<5)
    param.y=395;
}
function matrixCreator(){
  let k=0;
  for (i=0;i<size;i++) {
    pix[i]=[]
    for (j=0;j<size;j++) 
    if (center(i)&&center(j)){
      pix[i][j]=new pixel(i,j);
      pix[i][j].square();
    }
  }
}
function scoreCreator(){
  push();
  translate(420, 0)
  textSize(32);
  fill(0, 102, 153);
  text(score, 10, 60);
  pop();
}
function tailCreator(){
  tail.forEach(cell => {
    push();
    fill(255, 0, 0);
    cell.square();
    pop();
  });
}
function tailIncrement(){
  let aux = tail[tail.length-1];
  let nw = new pixel(aux.x,aux.y+10);
  tail.push(nw);
}
function outSidePrevent(){
  for (i=0;i<tail.length;i++)
    outSide(tail[i]);
}
function foodCreator(){
  push();
  fill(255, 220, 0);
  food.square();
  pop();
}
function eat(){
  if ((abs(tail[0].x-food.x)<squareSize)&&(abs(tail[0].y-food.y)<squareSize)){
    food.x=random(good);
    food.y=random(good);
    score +=1;
    tailIncrement();
  } 
}
function router(){
  switch (direction){
      case 1:
      turnLeft();
      break;
      case 2:
      turnRight();
      break;
      case 3:
      turnUp();
      break;
      case 4: 
      turnDown();
      break;
    }
}
function gameOver(){
  for (i=1;i<tail.length;i++)
  if ((tail[0].x==tail[i].x)&&(tail[0].y==tail[i].y)){
    direction = 0;
    score=0;
    for (j=3;j<tail.length;j++)
      tail.pop();
    textSize(32);
    text('Game Over', 165, 150);
    text('Score:', 165, 200);
    text(score, 270, 200);
    fill(0, 102, 153);
  }
}

// MAIN_FUNCTIONS

// KEY_EVENTS
function keyPressed() {
  turningPoint = new pixel(tail[0].x,tail[0].y);
  if (keyCode === LEFT_ARROW) {
    direction = 1;
    // turnLeft();
  } else if (keyCode === RIGHT_ARROW) {
    direction = 2;
    // turnRight();
  } else if (keyCode === UP_ARROW) {
    direction = 3;
    // turnUp();
  } else if (keyCode === DOWN_ARROW) {
    direction = 4;
    // turnDown();
  } else if (keyCode === BACKSPACE) {
    direction = 0;
  }
}



// MAIN 
function setup() {
  createCanvas(size+100, size);
  background(123);
  frameRate(speed);
  noFill();
  tail.push(head);
  tailIncrement();
  tailIncrement();
  tailIncrement();
  tailIncrement();
  tailIncrement();
}
function draw() {
  auxStringMaker();
  background(220);
  outSidePrevent();
  router();
  eat();
  foodCreator();
  scoreCreator();
  tailCreator();
  push();
  gameOver();
  matrixCreator();
}