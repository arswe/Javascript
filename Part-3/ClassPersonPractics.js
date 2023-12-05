class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  play() {
    console.log(`${this.name} is playing cricket with ${this.age} years old`);
  }
}

const person1 = new Person('Abdur', 25);
const person2 = new Person('Rahman', 26);

person1.play('well');
person2.play('bad');
