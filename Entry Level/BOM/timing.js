const timeout = document.getElementById('timeout');
const interval = document.getElementById('interval');
// startTimeout

function startTimeout() {
  timeout.innerHTML = 'Timeout started';
  setTimeout(() => {
    timeout.innerHTML = 'Timeout finished';
  }, 5000);
}

// stopTimeout;
function stopTimeout() {
  timeout.innerHTML = 'Timeout stopped';
  clearTimeout();
}
