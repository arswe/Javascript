// factory function

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw');
    },
  };
}

const circle = createCircle(1);
circle.draw();

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log('draw');
  };
}

const another = new Circle(1);
another.draw();
