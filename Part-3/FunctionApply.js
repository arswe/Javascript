// const person = {
//   fullName: function (city, country) {
//     return this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country;
//   },
// };

// const person1 = {
//   firstName: 'Mary',
//   lastName: 'Doe',
// };

// This will return "Mary Doe":
// console.log(person.fullName.apply(person1, ['Oslo', 'Norway']));

console.log(Math.max.apply(0, [1, 2, 3, 10, 81, 1])); // entire array pass kora lagbe
