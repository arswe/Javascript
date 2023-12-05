// Find the longest string in an array of strings

function longestString(names) {
  let longest = names[0];
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > longest.length) {
      longest = names[i];
    }
  }
  return longest;
}

console.log(longestString(['a', 'abc', 'ab', 'abcd', 'abcde', 'abcdef']));
