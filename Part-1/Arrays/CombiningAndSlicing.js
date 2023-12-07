const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second); // Primitive types are copied by their values and reference types are copied by their references.
// console.log(first);
// console.log(second);
// console.log(combined);

const slice = combined.slice(2, 4); // The first argument is the starting index and the second argument is the ending index.
console.log(slice);
console.log(combined);
