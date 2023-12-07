const numbers = [1, 2, 3, 4, 5, 6];

const filtered = numbers.filter((n) => n >= 0);

const result = filtered.map((n) => '<li>' + n + '</li>'); // mapping each element of the array to a string

const html = '<ul>' + result.join('') + '</ul>';

console.log(html);
