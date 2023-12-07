const person = {
  name: 'akaid',
  age: 26,
  location: {
    city: 'Dhaka',
    country: 'Bangladesh',
  },
  education: {
    degree: 'BSC',
    school: {
      name: 'TZ',
      location: 'Debigabj',
    },
  },
};

let txt = '';

for (let key in person) {
  txt += person[key] + ' ';
  document.getElementById('demo').innerHTML = txt;
}

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
