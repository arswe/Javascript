// Object Property example:
const product = {
  label: 'Red notebook',
  price: 3,
  stocks: 201,
  salePrice: (currentPrice) => {
    return currentPrice - 2;
  },
  quntity: 0,
  activitis: {
    sale: 'sale',
    new: 'new',
  },
};
// 1. Object property shorthand

// const name = 'Andrew';
// const userAge = 27;

// const user = {
//   name,
//   age: userAge,
//   location: 'Philadelphia',
// };

// console.log(user);

// 2. Object destructuring
// const product = {
//   label: 'Red notebook',
//   price: 3,
//   stocks: 201,
//   salePrice: undefined,
// };

// const label = product.label;
// const prices = product.price;

// const { label: productLabel, price, stocks, salePrice, rating = 5 } = product;
// console.log(productLabel);
// console.log(price);
// console.log(stocks);

// 3. Object destructuring in function parameter
// const transaction = (type, { label, price, stocks }) => {
//   console.log(type, label, price, stocks);
// };

// transaction('order', product);

// 4. Object destructuring in function parameter with default value
// const transaction = (type, { label, price, stocks = 0 } = {}) => {
//   console.log(type, label, price, stocks);
// };

// transaction('order', product);
// transaction('order');

// forin loop nestest object

// // forin loop -> loop through object
// for (const key in product) {
//   console.log(key, product[key]);
// }

// // forin loop -> loop through nested object
// for (const key in product.activitis) {
//   console.log(key, product.activitis[key]);
// }

// forin loop -> loop through object with hasOwnProperty
// for (const key in product) {
//   if (product.hasOwnProperty(key)) {
//     const element = product[key];
//     console.log(key, element);
//   }
// }

// delete object property
// delete product['stocks'];
// for (const key in product) {
//   if (product.hasOwnProperty(key)) {
//     const element = product[key];
//     console.log(key, element);
//   }
// }

// Object.keys() -> return an array of object keys
let contry = new String('Bangladesh');
console.dir(contry.concat(' is a beautiful country').toUpperCase());
