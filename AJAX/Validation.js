// create XMLHttpRequest object
function loadDoc() {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    document.getElementById('demo').innerHTML = this.responseText;
  };
  // prepare request - Method: GET, POST, PUT, DELETE etc.
  xhr.open('GET', '../data.txt', +Math.random());
  // send Request

  xhr.send();
}
