function circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log('draw');
  };
}

// cunst Circle1 = new Function('radius', `
//     this.radius = radius;
//     this.draw = () => {
//       console.log('draw');
//     };
// `);

const another = new circle(1);
console.log(another);
