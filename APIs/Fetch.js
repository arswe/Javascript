const display = document.getElementById('demo');

async function getData() {
  const res = fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await (await res).json();
  display.innerHTML = data[0].id;
}
