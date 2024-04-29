function loadDoc() {
  const xhr = new XMLHttpRequest();

  xhr.onload = function () {
    console.log('Response Finish');
    const container = document.getElementById('demo');
    container.innerHTML = this.responseText;
    console.log(this.getResponseHeader('date'));
  };

  xhr.open('GET', '../data.txt', true);
  xhr.send();
}
