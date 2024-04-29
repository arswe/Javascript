function loadDoc() {
  // create XMLHttpRequest object
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    document.getElementById('demo').innerHTML = this.responseText;
  };
  // prepare request - Method: GET, POST, PUT, DELETE etc.
  xhr.open('GET', '../data.txt', true);

  // send Request
  xhr.send();
}
