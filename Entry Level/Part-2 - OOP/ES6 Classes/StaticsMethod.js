// Static Methods
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  // Instance Method
  draw() {}
  // Static Method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const circle = Circle.parse('{ "radius": 1 }');
Circle.parse;
console.log(circle);

// Example: 2
class Math2 {
  static abs(value) {
    // ...
  }
}

Math2.abs;
