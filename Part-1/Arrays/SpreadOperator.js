const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, 'a', ...second, 'b']; // The spread operator is used to spread the elements of an array.
const copy = [...combined]; // The spread operator is also used to copy an array.
console.log(combined);
console.log(copy);
