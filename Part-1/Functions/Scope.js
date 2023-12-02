// Local vs. Global Scope

const color = 'red'; // Global Scope

function start() {
  const message = 'Hi';
  console.log(color);

  //   if (true) {
  //     const another = 'Hello';
  //   }
  //   for (let i = 0; i < 5; i++) {
  //     console.log(i);
  //   }
  //   console.log(i);
}
function stop() {
  const message = 'Hello';
}
stop();
start();
