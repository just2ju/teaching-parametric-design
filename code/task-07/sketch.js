let permissionGranted = false;
let cy, cx;

function setup() {
  createCanvas(windowWidth, windowHeight);

  cx = width / 2;
  cy = width / 2;

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

  background(255);
  strokeWeight(1);
  for (let i = 0; i < windowHeight; i += 5) {
    // i is equal to 0, 10, 20, 30, 40, 50, 60, 70, etc...
    line(0, i, windowHeight, i);
    stroke("red");
  }

  //rotationX + rotationY
  const dx = constrain(rotationY, -3, 3);
  const dy = constrain(rotationX, -3, 3);
  cx += dx * 2;
  cy += dy * 2;
  cx = constrain(cx, 0, width);
  cy = constrain(cy, 0, height);

  noFill();
  stroke("blue");
  ellipse(cx, cy, 180, 180);
}
