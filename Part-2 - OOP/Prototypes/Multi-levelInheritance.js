// Multi-level Inheritance example:
function Shape() {}

// Multi-level
Shape.prototype.duplicate = function () {
  console.log('duplicate');
};

function Circle() {}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.draw = function () {
  console.log('draw');
};

function Square() {}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Square.prototype.draw = function () {
  console.log('draw');
};

const s = new Shape();
const c = new Circle();
