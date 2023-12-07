// Create a Map
// const fruits = new Map([
//   ['apples', 500],
//   ['bananas', 300],
//   ['oranges', 200],
//   ['kiwis', 400],
//   ['strawberries', 100],
//   ['grapes', 1000],
// ]);

// console.dir(fruits.size);

// for (const fruit of fruits) {
//   console.log(fruit[0], fruit[1]);
// }

// const fruits = new Map();
// fruits.set('apples', 500);
// fruits.set('bananas', 300);
// fruits.set('oranges', 200);
// fruits.set('kiwis', 400);
// fruits.set('strawberries', 100);
// fruits.set('grapes', 1000);

// console.dir(fruits.size);

// fruits.get('apples');
// console.log(fruits);

// fruits.delete('apples');
// console.log(fruits);

// fruits.clear();
// console.log(fruits);

// console.log(fruits.has('apples'));

// for (const fruit of fruits) {
//   console.log(fruit[0], fruit[1]);
// }

// for (const fruit of fruits.keys()) {
//   console.log(fruit);
// }

// for (const fruit of fruits.values()) {
//   console.log(fruit);
// }
//
// for (const fruit of fruits.entries()) {
//   console.log(fruit);
// }

// console.log(fruits.entries());
// console.log(fruits.keys());
// console.log(fruits.values());
// console.log(fruits);

// Create Objects
const apples = { name: 'Apples' };
const bananas = { name: 'Bananas' };
const oranges = { name: 'Oranges' };

// Create a Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

console.log(fruits);
