// input: linearSearch(['a', 'b', 'c', 'd', 'e'], 'a')
// output: 0

// problem: linearSearch() function implementation

function linearSearch(array, value) {
  let lenght = array.length;
  for (let i = 0; i < lenght; i++) {
    if (array[i] === value) return i;
  }
  return 'Not found';
}

console.log(linearSearch(['a', 'b', 'c', 'd', 'e'], 'a'));
console.log(linearSearch(['a', 'b', 'c', 'd', 'e'], 'z'));
console.log(linearSearch(['a', 'b', 'c', 'd', 'e'], 'e'));
console.log(linearSearch(['a', 'b', 'c', 'd', 'e'], 'b'));
console.log(linearSearch(['a', 'b', 'c', 'd', 'e'], 'c'));
console.log(linearSearch(['a', 'b', 'c', 'd', 'e'], 'd'));
