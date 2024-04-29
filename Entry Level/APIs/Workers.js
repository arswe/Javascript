const demo = document.getElementById('demo');

if (typeof Worker !== 'undefined') {
  const myWorker = new Worker('worker.js');

  myWorker.onmessage = function (e) {
    demo.textContent = e.data;
  };

  myWorker.postMessage([demo.textContent, 'Hello World!']);
} else {
  alert('Sorry! No Web Worker support..');
}
