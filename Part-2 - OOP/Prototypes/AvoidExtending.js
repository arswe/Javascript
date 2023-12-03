// Avoid Extending

Array.prototype.shuffle = function () {
  // ...
};

const array = [];
array.shuffle(); // This will work, but it's a bad practice.
