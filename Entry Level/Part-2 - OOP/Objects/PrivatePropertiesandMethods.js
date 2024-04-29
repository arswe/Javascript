// Private Properties and Methods Properties

function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 }; // private property
  let computeOptimumLocation = function (factor) {
    // ...
  };
  this.draw = function () {
    computeOptimumLocation(1.2);
    // defaultLocation; // private property
    // this.radius; // public property
    console.log('draw');
  };
}

const circle = new Circle(10);
circle.();
circle.draw();
