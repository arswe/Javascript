const courses = [
  { id: 1, name: 'a', age: 20 },
  { id: 2, name: 'b' },
];

const course = courses.find((course) => {
  course.name === 'a';
});
