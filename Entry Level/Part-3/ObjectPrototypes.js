// JavaScript Object Prototypes
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    return this.name;
  };
}

// Prototype property
Person.prototype.sayName = 'Nicholas';
console.log(Person);
console.dir(Person);
