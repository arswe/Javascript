// AJAX - Asynchronous JavaScript and XML

// send Request to a server
function sendRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      resolve(this.response);
    };

    xhr.onerror = function () {
      reject('Something went wrong!');
    };

    xhr.open(method, url);

    xhr.responseType = 'json';
    xhr.send(data);
  });

  return promise;
}

// Get data from a server - after the page has loaded
function getData() {
  sendRequest('GET', 'https://jsonplaceholder.typicode.com/todos/1')
    .then((responseData) => console.log(responseData))
    .catch((error) => console.log(error));
}

// Send data to a server - after the page has loaded
function sendData() {
  sendRequest(
    'POST',
    'https://jsonplaceholder.typicode.com/posts',
    JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    })
  )
    .then((responseData) => console.log(responseData))
    .catch((error) => console.log(error));
}

const getButton = document.getElementById('get');
const sendButton = document.getElementById('send');

getButton.addEventListener('click', getData);
sendButton.addEventListener('click', sendData);
