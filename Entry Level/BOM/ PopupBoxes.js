const confirm = document.getElementById('confirm');
const prompt = document.getElementById('prompt');

function myFunction() {
  window.alert('I am an alert box!');
}

function confirmBox() {
  let txt;

  if (confirm('Press a button!') == true) txt = 'You pressed OK!';
  else txt = 'You pressed Cancel!';

  confirm.innerHTML = txt;
}

function promptBox() {
  let txt;

  const person = prompt('Please enter your name:', 'Harry Potter');

  if (person == null || person == '') txt = 'User cancelled the prompt.';
  else txt = 'Hello ' + person + '! How are you today?';

  prompt.innerHTML = txt;
}
