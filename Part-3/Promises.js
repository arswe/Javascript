// Promise

const status = true;

console.log('Task 1');

const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (status) {
      resolve('Promise is resolved! thats means task 2');
    } else {
      reject('Promise is rejected!');
    }
  }, 3000);
});

promise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  });

console.log('Task 3');
