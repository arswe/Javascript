// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log('draw');
  };
}

const another = new Circle(1);

another.draw();

console.log(another.constructor);
// Constructor Property
