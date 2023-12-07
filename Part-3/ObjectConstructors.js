function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person('John', 'Doe', 50, 'blue');
const myMother = new Person('Sally', 'Rally', 48, 'green');

document.getElementById('demo').innerHTML =
  'My father' + myFather.lastName + ' ' + myFather.lastName + ' ' + myFather.age + '. My mother is ' + myMother.age;
