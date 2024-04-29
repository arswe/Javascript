// Objective: Object Constructors
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.fullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
}

const myFather = new Person('John', 'Doe', 50, 'blue');
console.log(myFather);

// const myFather = new Person('John', 'Doe', 50, 'blue');
// const myMother = new Person('Sally', 'Rally', 48, 'green');

// document.getElementById('demo').innerHTML =
//   'My father' + myFather.lastName + ' ' + myFather.lastName + ' ' + myFather.age + '. My mother is ' + myMother.age;
