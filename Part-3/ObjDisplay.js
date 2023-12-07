const person = {
  name: 'akaid',
  age: 26,
  date: new Date(),
};

let conv = JSON.stringify(person);
document.getElementById('demo').innerHTML = conv;

// let conv = JSON.stringify(person);
// console.log(typeof conv);

// const PersonArray = Object.values(person);
// for (let x of PersonArray) {
//   console.log(x);
// }

// let txt = '';

// for (let key in person) {
//   txt += person[key] + ' ';
//   document.getElementById('demo').innerHTML = txt;
// }

// document.getElementById('demo').innerHTML =
//   person.name +
//   ' ' +
//   person.age +
//   ' ' +
//   person.location.city +
//   ' ' +
//   person.education.degree +
//   ' ' +
//   person.education.school.name +
//   ' ' +
//   person.education.school.location;
// document.getElementById('demo1').innerHTML = person.age;
// document.getElementById('demo').innerHTML = person.location.city;
