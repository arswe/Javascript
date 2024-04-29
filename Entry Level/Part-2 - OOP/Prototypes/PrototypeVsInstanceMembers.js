// Prototype Vs Instance Members Example:

function Circle(radius) {
  // Instance members
  this.radius = radius;
  this.move = () => {
    this.draw();
    console.log('move');
  };
}

// Prototype members
Circle.prototype.draw = () => {
  this.move();
  console.log('draw');
};

const c1 = new Circle(1);
const c2 = new Circle(1);

// Instance members
Circle.prototype.toString = () => {
  return 'Circle with radius ' + this.radius;
};
