const jscad = require('@jscad/modeling')
const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;

const main = () => {
  const circleShape = circle({
    radius: 5,
    segments: 3,
    center: [0, 10]
});

const extrudeShape = extrudeLinear({
  height: 100,
  twistAngle: Math.PI * 2,
  twistSteps: 120
}, circleShape);

const sphereShape = sphere ({
  radius: 5,
  segments: 20,
  center: [0, 10, 0],
});

const sphereShape2 = sphere ({
  radius: 5,
  segments: 20,
  center: [0, 10, 100],
});

const unionShape = union([extrudeShape, sphereShape, sphereShape2]);

  const shapes = [];

for (let s = 0; s < 10; s +=1) {  
  shapes.push(translate
    [0, s*15, 0],
    unionShape);
 };
 const colorUnionShape = colorize (colorNameToRgb('orange'), unionShape);

  return unionShape;
};

module.exports = { main };