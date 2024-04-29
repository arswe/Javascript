const movies = [
  { title: 'a', year: 2024, rating: 4.5 },
  { title: 'b', year: 2020, rating: 4.7 },
  { title: 'c', year: 2021, rating: 3.9 },
  { title: 'd', year: 2024, rating: 4.9 },
  { title: 'e', year: 2020, rating: 4.8 },
  { title: 'f', year: 2021, rating: 4.2 },
];

// All the movies in 2020 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title

const titles = movies
  .filter((m) => m.year === 2020 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

console.log(titles);
