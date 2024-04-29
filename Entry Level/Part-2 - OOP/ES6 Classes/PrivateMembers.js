// Private Members Using Symbols

const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    // this.radius = radius;
    // this['radius'] = radius;
    this[_radius] = radius;
  }
  [_draw]() {
    console.log(_radius);
  }
}

const c = new Circle(1);

console.log(c); // 1

const key = Object.getOwnPropertySymbols(c)[0]; // [ Symbol() ]
console.log(c[key]);
