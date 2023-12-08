// Run by: node Async.js

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
    }, 2000);
  });
  return promise;
}

function progress(callback) {
  console.log('counrse on progress...');

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if ((marks) => 70) {
        resolve();
      } else {
        reject('Course is failed');
      }
    }, 1000);
  });

  return promise;
}

function certificate() {
  console.log('preparing certificate...');
  const promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve('congratulations! you have completed the course');
    }, 3000);
  });
  return promise;
}

async function course() {
  try {
    await enroll();
    await progress();
    const message = await certificate();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

course();

// enroll()
//   .then(progress)
//   .then(certificate)
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
