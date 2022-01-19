let permissionGranted = false;
let cy, cx;

function setup() {
  createCanvas(windowWidth, windowHeight);

  cx = width/2
  cy = width/2
  
  //gyroscope button
  if (
    typeof DeviceOrientationEvent !== "undefined" &&
    typeof DeviceOrientationEvent.requestPermission === "function"
  ) {
    //ios device

    DeviceOrientationEvent.requestPermission()
      .catch(() => {
        let button = createButton("click to allow access to sensors");
        button.style("font-size", "24px");
        button.center();
        button.mousePressed(requestAccess);
        throw error;
      })
      .then(() => {
        permissionGranted = true;
      });
  } else {
    //non ios device

    textSize(48);
    permissionGranted = true;
  }
}

//gyroscope button access
function requestAccess() {
  DeviceOrientationEvent.requestPermission().then((response) => {
    if (response == "granted") {
      permissionGranted = true;
    } else {
      permissionGranted = false;
    }
  });
  this.remove();
}

function draw() {
  if (!permissionGranted) return;

  //background circles
  background(255);
  strokeWeight(1);
  for (var i = 0; i < 3000; i += 10) {
      ellipse(Math.random()/2, windowHeight/2, i);
      ellipse(windowWidth, windowHeight/2, i);
  stroke('red');
  }
  
  //rotationX + rotationY
  const dx = constrain(rotationY, -3, 3);
  const dy = constrain(rotationX, -3, 3);
  cx += dx*2 ;
  cy += dy*2 ;
  cx = constrain(cx, 0, width);
  cy = constrain(cy, 0, height);

  //moving shape
  noFill();
  stroke('red');
  strokeWeight(1.5);
  for (let i = 0; i < 200; i += 10) {ellipse(cx, cy, i, i);
    }
}
