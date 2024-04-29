// Rest Operator (...)

function sum(discount, ...prices, someValue) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum(0.1, 20, 30, 1));
