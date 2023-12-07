// function myFunction(a, b) {
//   return a * b;
// }
// const result = myFunction(10, 2); //
// console.log(result);

// const x = {
//   a: function () {
//     console.log(this);
//   },
// };
// x.a();

// let x = myFunction(); // x will be the window object

// function myFunction() {
//   return this;
// }

// console.log(x);

// const myObject = {
//   firstName: 'John',
//   lastName: 'Doe',
//   fullName: function () {
//     return this.firstName + ' ' + this.lastName;
//   },
// };
// const output = myObject.fullName();
// console.log(output);

// const myObject = {
//   firstName: 'John',
//   lastName: 'Doe',
//   fullName: function () {
//     return this;
//   },
// };

// This will return [object Object] (the owner object)
// myObject.fullName();
// console.log(myObject.fullName());

// This is a function constructor:
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName = arg2;
}

// This creates a new object
const myObj = new myFunction('John', 'Doe');
console.log(myObj);
// This will return "John"
console.log(myObj.firstName);
