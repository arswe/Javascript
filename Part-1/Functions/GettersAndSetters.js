// Getters and Setters

const person = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = 'Jane Smith';

console.log(person);

// console.log(person.fullName);
// console.log(person.fullName());
// console.log(`${person.firstName} ${person.lastName}`);
