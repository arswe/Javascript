// Create an object:
// const person = {
//   firstName: 'Abdur',
//   lastName: 'Rahman',
//   language: 'En',
//   set lang(lang) {
//     this.language = lang;
//   },
// };

// Display data from the object using a getter:
// console.log((person.lang = 'bd'));

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   get fullName() {
//     return this.firstName + ' ' + this.lastName;
//   },
// };

// Display data from the object using a method:
// console.log(person.fullName);

// Define object
const obj = { counter: 0 };

// Define setters and getters
Object.defineProperty(obj, 'reset', {
  get: function () {
    this.counter = 0;
  },
});
Object.defineProperty(obj, 'increment', {
  get: function () {
    this.counter++;
  },
});
Object.defineProperty(obj, 'decrement', {
  get: function () {
    this.counter--;
  },
});
Object.defineProperty(obj, 'add', {
  set: function (value) {
    this.counter += value;
  },
});
Object.defineProperty(obj, 'subtract', {
  set: function (value) {
    this.counter -= value;
  },
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

// Display counter:
console.log(obj.counter);
