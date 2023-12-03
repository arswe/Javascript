// Enumerating Properties

function Circle(radius) {
  this.radius = radius;

  this.defaultLocation = { x: 0, y: 0 };
  this.computeOptimumLocation = function (factor) {
    // ...
  };
  this.draw = function () {
    this.computeOptimumLocation(1.2);
    console.log('draw');
  };
}

const circle = new Circle(10);
circle.computeOptimumLocation();
circle.draw();
