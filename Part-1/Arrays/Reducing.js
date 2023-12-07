const numbers = [1, 2, -1, 2, 3];

// a = 0, c = 1 => a = 1
// a = 1, c = 2 => a = 3
// a = 3, c = -1 => a = 2
// a = 2, c = 2 => a = 4
// a = 4, c = 3 => a = 7

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);
// 1 + 2 + (-1) + 2 + 3 = 7
