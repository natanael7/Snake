// SETTINGS
"use strict";
let squareSize=10;
let scale=40;
let speed=10;
let size=squareSize*scale;

// VARIABLES
let pix = new Array(scale);
let i,j=0;
let direction;
let score=1;
let length = 1;
let good = new Array(40);
let food = new pixel(95,125);
let head = new pixel(195,205);
let tail = new Array();

// FUNCTIONS
// function goodCreator(){
//   for(i=5;i<=395;i++)
//     if (center(i))
//       good.push(i);
// }
// function router(){
//   switch (direction){
//       case 1: head.x = head.x-squareSize;
//       break;
//       case 2: head.x = head.x+squareSize;
//       break;
//       case 3: head.y = head.y-squareSize;
//       break;
//       case 4: head.y = head.y+squareSize;
//       break;
//     }
// }
// function balanceNumber(x){
//   let aux=x,i;
//   while(!center(aux)){
//     aux++;
//   }
//   return aux;
// }
// function outSide(param){
//   if (param.x>395)
//     param.x=5;
//   if (param.x<5)
//     param.x=395;
//   if (param.y>395)
//     param.y=5;
//   if (param.y<5)
//     param.y=395;
// }
// function headCreator(){
//   push();
//   fill(255, 0, 0);
//   head.square();
//   pop();
// }
// function foodCreator(){
//   push();
//   fill(255, 220, 0);
//   food.square();
//   pop();
// }
// function eat(){
//   if ((abs(head.x-food.x)<squareSize)&&(abs(head.y-food.y)<squareSize)){
//     food.x=random(good);
//     food.y=random(good);
//     score +=1;
//   } 
// }
// function scoreCreator(){
//   push();
//   translate(420, 0)
//   textSize(32);
//   fill(0, 102, 153);
//   text(score, 10, 60);
//   pop();
// }
function center(x){
  if(((x-5)%5==0)&&!(x%10==0)) return true; 
  else return false;
}

// MAIN_FUNCTIONS

// KEY_EVENTS

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

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    direction = 1;
    turningPoint = new pixel(head.x,head.y);
    turningPoint.fill();
    console.log(turningPoint);
  } else if (keyCode === RIGHT_ARROW) {
    direction = 2;
  } else if (keyCode === UP_ARROW) {
    direction = 3;
  } else if (keyCode === DOWN_ARROW) {
    direction = 4;
    tailIncrement();
  }
}


// MAIN 
function setup() {
  createCanvas(size+100, size);
  background(123);
  frameRate(speed);
  matrixCreator();
  noFill();
  tail.push(head);
}
function draw() {
  background(220);
  matrixCreator();
  tailCreator();
}