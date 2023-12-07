// Property Descriptors

let person = { name: 'akaid' };
// let objectBase = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');

// console.log(descriptor);
Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: true,
  configurable: false,
});

delete person.name;
console.log(Object.keys(person));
