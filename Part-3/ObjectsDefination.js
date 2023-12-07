const person = {
  name: 'Mosh',
  age: 30,
  getName: function () {
    return this.name;
  },
};

console.log(person.getName());
