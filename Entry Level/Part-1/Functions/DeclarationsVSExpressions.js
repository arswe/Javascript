// function Declaration
function walk() {
  console.log('walk');
}

// function Expressions (Anonymous)
let run = function () {
  console.log('run');
};

let move = run;
run();
move();
