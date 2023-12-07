const circle = {
  radius: 1,
  drow() {
    console.log('Drow');
  },
};

// for (const key in circle) {
//   console.log(key);
//   console.log(key, circle[key]);
// }

// for (const key of Object.keys(circle)) {
//   console.log(key);
// }

// for (const entry of Object.entries(circle)) console.log(entry);

if ('radius' in circle) console.log('yes');
