// Code: Callback Pattern
const paymentSuccess = true;
const marks = 80;

function enroll(callback) {
  console.log('Enrolled is in progress...');

  setTimeout(function () {
    if (paymentSuccess) callback();
    else console.log('Enrolled failed');
  }, 3000);
}

function progress(callback) {
  console.log('counrse on progress...');

  setTimeout(function () {
    if (marks >= 80) callback();
    else console.log('You are failed');
  }, 2000);
}

function certificate() {
  console.log('Certificate is generated');

  setTimeout(function () {
    console.log('Certificate is sent to your email');
  }, 1000);
}

enroll(function () {
  progress(certificate);
});
