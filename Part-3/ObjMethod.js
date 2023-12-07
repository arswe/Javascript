const person = {
  name: 'John',
  id: 5566,
  education: {
    degree: 'Masters',
    school: {
      name: 'SPU',
      location: 'Seattle',
    },
  },
  hobbies: ['music', 'movies', 'sports'],
  func: function () {
    return `My name is ${this.name} and I am ${this.id} years old`;
  },
};

const { name, id, education, hobbies, func: func } = person;
console.log(name);
console.log(id);
console.log(education.degree);
console.log(hobbies.concat(['reading']));
console.dir(person.func());
