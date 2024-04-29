const numbers = [1, 2, 3, 4, 1, 1];

console.log(numbers.indexOf('a')); // -1
console.log(numbers.indexOf(1)); // 0
console.log(numbers.indexOf(1, 2)); // 4
console.log(numbers.lastIndexOf(1)); // 5
console.log(numbers.indexOf(1) !== -1); // true
console.log(numbers.includes(1)); // true
console.log(numbers.indexOf(1, 2) !== -1); // true
