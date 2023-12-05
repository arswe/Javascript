function isArray(arr) {
  console.log(arr.constructor === Array);
}

isArray({ fname: 'akaid' }); // true
