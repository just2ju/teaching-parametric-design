const jscad = require('@jscad/modeling')
const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;

const main = () => {
  const shape = cube({
    size: 10,
    center: [0, 0, 5]
  });

  const shape2 = cube({
    size: 9,
    center: [0, 0, 8]
  });

  const shape3 = cube({
    size: 3,
    center: [0, 0, 4]
  });

  const subtractShape = subtract(
    shape, 
    shape2);

  const unionShape = union([shape3, subtractShape]);
 

  return unionShape;
};

module.exports = { main };