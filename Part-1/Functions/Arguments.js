let x = 1;
x = 'a';

function sum() {
  total = 0;

  for (const value of arguments) total += value;
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 10));
