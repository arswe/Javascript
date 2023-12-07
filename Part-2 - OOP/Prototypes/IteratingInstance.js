function Circle(radius) {
  // Instance members
  this.radius = radius;

  // Instance members
  this.move = () => {
    this.draw();
    console.log('move');
  };
}

// Prototype members
Circle.prototype.draw = () => {
  console.log('draw');
};

const c1 = new Circle(1);
