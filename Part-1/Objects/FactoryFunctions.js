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
