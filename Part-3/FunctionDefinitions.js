// function Declarations
// function functionName(parameters) {
// code to be executed
// }
// Function is called, return value will end up in x
// const x = myFunction(4, 3);

//
// const myFunction = new Function('a', 'b', 'return a * b');
// let x = myFunction(4, 3);
// console.log(x);

// Function Hoisting
myFunction(5);

function myFunction(y) {
  console.log(y * y);
}
