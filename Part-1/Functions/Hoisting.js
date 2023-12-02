// function Declaration
walk();

function walk() {
  console.log('walk');
}

// function Expressions (Anonymous)

let move = run;
run();
move();

let run = function () {
  console.log('run');
};
