// Factory Function

function createCircle(radius) {
  return {
    radius,
    drow() {
      console.log('draw');
    },
  };
}

const circle = createCircle(1);
circle.drow();
console.log(circle.radius);

const circle2 = createCircle(2);
console.log(circle2.radius);
