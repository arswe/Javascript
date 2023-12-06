// Object Property example:
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
const product = {
  label: 'Red notebook',
  price: 3,
  stocks: 201,
  salePrice: undefined,
};

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
const transaction = (type, { label, price, stocks = 0 } = {}) => {
  console.log(type, label, price, stocks);
};

transaction('order', product);
transaction('order');
