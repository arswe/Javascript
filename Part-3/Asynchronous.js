// function myDisplayer(something) {
//   document.getElementById('demo').innerHTML = something;
//   console.log(something);
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   if (myCallback) myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);

// setTimeout(function () {
//   console.log('Hello');
// }, 2000);

function myFunction() {
  document.getElementById('demo').innerHTML = 'I love You !!';
}
setTimeout(myFunction, 3000);
