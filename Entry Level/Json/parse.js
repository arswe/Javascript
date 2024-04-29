const txt = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
// display the text in the console
console.log(txt);

// Parse the text, and transform the result into a JavaScript object.`
const obj = JSON.parse(txt);
console.log(obj);
