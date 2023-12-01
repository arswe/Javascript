const numbers = [1, 2, -3, 4, 5, 6];

const atLeastOnePositive = numbers.some(function (value) {
  return value >= 0;
});

console.log(atLeastOnePositive);
