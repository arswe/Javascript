const display = document.getElementById('demo');

function getData() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      display.innerHTML = data.map((item) => {
        return `<li>${item.id}</li>`;
      });
    })

    .catch((error) => console.log(error));
}
