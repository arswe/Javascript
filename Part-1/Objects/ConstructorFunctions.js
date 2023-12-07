// function createCircle(radius) {
//   return {
//     radius,
//     drow() {
//       console.log('draw');
//     },
//   };
// }
// const circle = createCircle(1);
// circle.drow();
// console.log(circle.radius);

// Constructor Function

function Circle(radius) {
  this.radius = radius;
  this.drow = function () {
    console.log('draw');
  };
}

const circle = new Circle(1);
circle.drow();
console.log(circle.radius);
