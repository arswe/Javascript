// Promise

// let myPromise = new Promise(function (myResolve, myReject) {
// "Producing Code" (May take some time)

//   myResolve(); // when successful
//   myReject(); // when error
// });

// "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//   function (value) {
//     /* code if successful */
//   },
//   function (error) {
//     /* code if some error */
//   }
// );

// const status = true;

// console.log('Task 1');

// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     if (status) {
//       resolve('Promise is resolved! thats means task 2');
//     } else {
//       reject('Promise is rejected!');
//     }
//   }, 3000);
// });

// promise
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// console.log('Task 3');

// function myDisplayer(some) {
//   document.getElementById('demo').innerHTML = some;
// }

// let myPromise = new Promise(function (myResolve, myReject) {
//   let x = 0;

//   // The producing code (this may take some time)

//   if (x == 0) {
//     myResolve('OK');
//   } else {
//     myReject('Error');
//   }
// });

// myPromise.then(
//   function (value) {
//     myDisplayer(value);
//   },
//   function (error) {
//     myDisplayer(error);
//   }
// );

//  Callback Pattern
const paymentSuccess = true;
const marks = 80;

function enroll(callback) {
  console.log('Enrolled is in progress...');

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentSuccess) {
        resolve();
      } else {
        reject('Enrolled is failed');
      }
    }, 3000);
  });
  return promise;
}

function progress(callback) {
  console.log('counrse on progress...');

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (marks > 70) {
        resolve();
      } else {
        reject('Course is failed');
      }
    }, 3000);
  });

  return promise;
}

function certificate() {
  console.log('Certificate is generated');
  promise = new Promise(function (resolve, reject) {
    setTimeout(function (resolve) {
      resolve('Certificate is generated');
    }, 3000);
  });
  return promise;
}

enroll()
  .then(progress)
  .then(certificate)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  });
