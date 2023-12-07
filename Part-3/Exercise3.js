// Find the longest string in an array of strings

function longestString(names) {
  let longestWord = '';
  for (name of names) {
    if (name.length > longestWord.length) longestWord = name;
  }
  return [longestWord, names.indexOf(longestWord)];
}

console.log(longestString(['Holly', 'Elise', 'Rory', 'Ollie', 'Peter', 'AbdurRahman', 'Mehdi', 'Mehdi']));
