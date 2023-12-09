const width = document.getElementById('width');
const height = document.getElementById('height');

width.innerHTML = 'Window inner width: ' + window.innerWidth;
height.innerHTML = 'Window inner height: ' + window.innerHeight;

function openWindow() {
  window.open('https://www.google.com', 'Google', 'width=500,height=500');
}

function closeWindow() {
  window.close();
}
