let xValue;
let colorValue;

let yValue = 5
let textColor = ('red')


function setup() {
  createCanvas(400, 400);
  frameRate(5)
}

function draw() {
  background(255);
  stroke('red');
  fill('white');
  rect(155, 155, 90, 90);
  fill('black');
  circle(
    random(180, 220),
    random(180, 220),
    50
  );
}

/*function draw() {
  noLoop()
  background(255);
  fill('blue');
  for (let y = 0; y < 10; y += 1) {
    for (let x = 0; x < 10; x += 1) {
    fill(random(0, 255), random(0, 255), random(0, 255), random(0, 255))
    circle( 
      100 + x * 20
      100 + y * 20
      x + y
     );
    }
  }
}*/

