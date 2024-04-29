function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
}

Circle.call({}, 1); // Exactly the same as the above line of code (line 37)

const another = new Circle(1);
console.log('another', another);

// const Circle1 = new Function(
//   'radius',
//   `this.radius = radius;
// this.draw = function () {
//   console.log('draw');
// }`
// );

// const circle = new Circle1(1);
// console.log('circle', circle);
