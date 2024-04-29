// document.getElementById('demo').innerHTML = 'Hello World';

// console.dir(document.getElementById('demo'));

// document.getElementsByTagName('p')[0].innerHTML = 'Hello World';
// document.getElementsByTagName('p')[1].innerHTML = 'Hello World';
// document.getElementsByClassName('anchor').innerHTML = 'hoc vien lap trinh';

// console.log(document.querySelector('.anchor'));

// document.write(Date());

function validateForm() {
  const form = document.forms['myForm'];
  const value = form[fname].value;

  if (value === '') alert('Please input your name');
  return false;
}
