// 1 = 0000001
// 2 = 0000010
// R = 0000011
// console.log(1 | 2); // BitWise OR = 3
// console.log(1 & 2); // BitWise AND = 0

// Read, Write, Execute
// 0000001
// 0000110
// 0000111

const readPermission = 4;
const writePermission = 2;
const executePermission = 1
let myPermission = 0;

myPermission = myPermission | readPermission | writePermission;
// console.log(myPermission);

let message = (myPermission & readPermission) ? 'Yes' : 'No';
console.log(message);
