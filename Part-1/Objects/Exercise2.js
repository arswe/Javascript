let address = {
  stree: 'a',
  city: 'b',
  zipCode: 'c',
};
// Factory Function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}
let address2 = createAddress('a', 'b', 'c');
console.log(address2);

// Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let address3 = new Address('a', 'b', 'c');
console.log(address3);
