// const numbers = [2, 3, 1];
// numbers.sort();

// console.log(numbers);

const courses = [
  {
    id: 1,
    name: 'Node.js',
  },
  {
    id: 2,
    name: 'javascript',
  },
];

courses.sort(function (a, b) {
  // a < b => -1
  // a > b => 1
  // a === b => 0
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;

  return 0;
});

console.log(courses);
