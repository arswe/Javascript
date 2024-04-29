// Falsy
// Underfined
// null
// ''
// false
// 0
// NaN
// Anything that is not Falsy -> Truthy

const array = [0, null, undefined, '', 2, 3];

function CountTruthy(array) {
  let count = 0;
  for (let value of array) {
    if (value) count++;
  }
  return count;
}

console.log(CountTruthy(array));
