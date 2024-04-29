function validation() {
  const inpObj = document.getElementById('id1');

  if (inpObj.validity.rangeOverflow) {
    inpObj.setCustomValidity('make Range Overflow');
  } else if (inpObj.validity.rangeUnderflow) {
    inpObj.setCustomValidity('make Range Underflow');
  } else if (inpObj.validity.valueMissing) {
    inpObj.setCustomValidity('make Value Missing');
  }

  if (!inpObj.checkValidity()) {
    document.getElementById('demo').innerHTML = inpObj.validationMessage;
  }
}
