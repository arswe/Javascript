checkSpeed(71);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed <= speedLimit + kmPerPoint) {
    console.log('Ok');
    return;
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoint); // 12.4 => 12
  if (points >= 12) console.log('License suspended'); // 12 points => License suspended
  else console.log('Points', points); // 1-11 points => Points 1-11
}
