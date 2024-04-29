// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   fullName: function () {
//     return this.firstName + ' ' + this.lastName;
//   },
// };

// This will return "John Doe":
// console.log(person.fullName());

// const person = {
//   fullName: function () {
//     return this.firstName + ' ' + this.lastName;
//   },
// };
// const person1 = {
//   firstName: 'John',
//   lastName: 'Doe',
// };
// const person2 = {
//   firstName: 'Mary',
//   lastName: 'Doe',
// };

// This will return "John Doe":
// const calls = person.fullName.call(person2);
// console.log(calls);

const person = {
  fullName: function (city, country) {
    return this.firstName + ' ' + this.lastName + ',' + city + ',' + country;
  },
};

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
};

const calls = person.fullName.call(person1, 'Oslo', 'Norway');
console.log(calls);
