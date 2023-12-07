//  Resetting the Constructor example:

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
};

function Circle(radius) {
  this.radius = radius;
}
// Circle.prototype.constructor = Circle; // This is the default value
// new Circle.prototype.constructor() => new Shape; // This is the default value

Circle.prototype = Object.create(Shape.prototype); // Circle.prototype.__proto__ = Shape.prototype
Circle.prototype.constructor = Circle; // This is the default value

Circle.prototype.draw = function () {
  console.log('draw');
};

const s = new Shape();
const c = new Circle(1);
