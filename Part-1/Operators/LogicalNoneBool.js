// falsy (false)
// undefind
// null 
// 0
// false 
// ''
// NaN

// Anything that is not Falsy -> Truthy

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);
