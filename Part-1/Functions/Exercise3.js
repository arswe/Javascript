try {
  const numbers = [1, 2, 3, 4, 1, 1];
  const count = countOccurrences(null, 1);
  console.log(count);
} catch (error) {
  console.log(error.message);
}

function countOccurrences(array, searchElement) {
  // let count = 0;
  // for (const element of array)
  //   if (element === searchElement) count++;
  // return count;

  if (!Array.isArray(array)) {
    throw new Error('Invalid array.');
  }
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}
