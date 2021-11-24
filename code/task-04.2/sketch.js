const sketchWidth = 400;
const sketchHeight = 400;

let c = color (100);

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

function draw() {
  background(255);
  translate(sketchWidth/2, sketchHeight/2);


//right object
strokeWeight(100.0);
strokeCap(ROUND);
stroke(210);
line(-120, -50, -120, -130);

strokeWeight(100.0);
strokeCap(ROUND);
stroke(40);
line(-120, -50, -120, 10);

strokeWeight(50.0);
strokeCap(ROUND);
stroke(140);
line(-120, -50, -120, 0);

//middle object

strokeWeight(100.0);
strokeCap(ROUND);
stroke(80);
line(0, 0, 0, 50);

strokeWeight(100.0);
strokeCap(ROUND);
stroke(210);
line(0, 0, 0, 10);

strokeWeight(50.0);
strokeCap(ROUND);
stroke(40);
line(0, 0, 0, 5);



//left object
strokeWeight(100.0);
strokeCap(ROUND);
stroke(40);
line(120, -100, 120, 130);

strokeWeight(100.0);
strokeCap(ROUND);
stroke(210);
line(120, -100, 120, 10);

strokeWeight(50.0);
strokeCap(ROUND);
stroke(80);
line(120, -100, 120, 0);

}
