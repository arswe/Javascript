// function myFunction() {
//   let a = 4;
//   return a * a;
// }
// myFunction();

// let a = 4; // global
// function myFunction() {
//   return a * a;
// }

// Initiate counter
// let counter = 0;

// Function to increment counter
// function add() {
//   counter += 1;
// }

// Call add() 3 times
// add();
// add();
// add();

// Function to increment counter
// function add() {
//   let counter = 0;
//   counter += 1;
//   return counter;
// }

// Call add() 3 times
// add();
// add();
// add();
// console.log(add());

const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

console.log(add());

// the counter is now 3
