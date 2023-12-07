// 1. var is function scoped not block scoped like let and const are (see below)
// 2. var is not block scoped so it is accessible outside of the for loop
// 3. var is hoisted to the top of the function (see below)
// 4. var can be redeclared (see below)
// 6. let and const are block scoped (see below)
// 7. let and const are not hoisted to the top of the function (see below)
// 8. let and const cannot be redeclared (see below)
// 10. let and const are not accessible outside of the for loop (see below)

function start() {
  for (var i = 0; i < 5; i++) {
    if (true) {
      let color = 'red';
    }
    console.log(i); // var is function scoped not block scoped like let and const are (see below)
  }
  console.log(color); // var is not block scoped so it is accessible outside of the for loop
}
start();
