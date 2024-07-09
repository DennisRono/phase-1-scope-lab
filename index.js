// Write your solution in this file!
var customerName = "bob";

beforeEach(function () {
  customerName = "bob";
});

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = "not bob";
}

function overwriteBestCustomer(newBestCustomer) {
  window.bestCustomer = newBestCustomer;
}

const leastFavoriteCustomer = "some initial value";

function changeLeastFavoriteCustomer() {
  try {
    leastFavoriteCustomer = "new value";
  } catch (error) {
    throw new Error("Assignment to constant variable.");
  }
}

console.log(customerName);
upperCaseCustomerName();
console.log(customerName);

setBestCustomer();
console.log(bestCustomer);

overwriteBestCustomer();
console.log(bestCustomer);

console.log(leastFavoriteCustomer);
changeLeastFavoriteCustomer();
