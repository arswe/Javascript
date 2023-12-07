// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   fullName: function () {
//     return this.firstName + ' ' + this.lastName;
//   },
// };

// const member = {
//   firstName: 'Hege',
//   lastName: 'Nilsen',
// };

// let fullName = person.fullName.bind(member);
// console.log(fullName());

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   display: function () {
//     let x = document.getElementById('demo');
//     x.innerHTML = this.firstName + ' ' + this.lastName;
//   },
// };

// console.log(person.display());

const person = {
  firstName: 'John',
  lastName: 'Doe',
  display: function () {
    let x = document.getElementById('demo');
    x.innerHTML = this.firstName + ' ' + this.lastName;
  },
};

console.log(setTimeout(person.display, 3000));
