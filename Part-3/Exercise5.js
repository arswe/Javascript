//  Array to search falsy value and return the pure array and  value.

const mixedArray = [0, 1, false, 2, '', 3, 'a', 's', 34, NaN, 87, true, undefined, 's', 0, 0, 0, 0, 0, 0, 0, 0, 0];

function falsyValue(array) {
  let pureArray = [];
  let falsyValue = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) pureArray.push(array[i]);
    else falsyValue.push(array[i]);
  }
  return [pureArray, falsyValue];
}

console.log(falsyValue(mixedArray));
