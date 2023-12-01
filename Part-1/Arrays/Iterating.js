const numbers = [1, 2, 3, 4, 5, 6];
// array iteration
// for (let number of numbers) console.log(number);
// numbers.forEach(function (number) {
//   console.log(number);
// });

numbers.forEach((number) => console.log(number));
numbers.forEach((number, index) => console.log(index, number));
// numbers.forEach((number, index) => console.log(index, number, numbers));
