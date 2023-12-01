const courses = [
  { id: 1, name: 'a', age: 20 },
  { id: 2, name: 'b' },
];

const course = courses.find(function (course) {
  return course.name === 'a';
});
console.log(course);

const course2 = courses.findIndex(function (course) {
  return course.name === 'b';
});

console.log(course2);
