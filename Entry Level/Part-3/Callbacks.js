// function myFirst() {
//   myDisplayer('Hello');
// }

// function mySecond() {
//   myDisplayer('Goodbye');
// }

// myFirst();
// mySecond();

// function Display(some) {
//   document.getElementById('demo').innerHTML = some;
//   console.log(some);
// }

// function Calculator(num1, num2) {
//   let sum = num1 + num2;
//   Display(sum);
// }
// Calculator(5, 5);

// function myDisplayer(some) {
//   document.getElementById('demo').innerHTML = some;
//   console.log(some);
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   if (myCallback) myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);

// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
document.getElementById('demo').innerHTML = posNumbers;

// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}
