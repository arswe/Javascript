let address = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

// Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

function areEqual(address, address2) {
  return address.street === address2.street && address.city === address2.city && address.zipCode === address2.zipCode;
}

function areSame(address, address2) {
  return address === address2; // This will return false because they are two different objects in memory
}

console.log(areEqual(address, address2));
console.log(areSame(address, address2));
