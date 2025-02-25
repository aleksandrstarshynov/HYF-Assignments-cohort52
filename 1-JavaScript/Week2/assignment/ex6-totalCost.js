const cartForParty = {
  Meat: 1.75,
  Cheese: 0.99,
  Chips: 12,
  Cola: 4.99,
  Beers: 5.12,
};
console.log(cartForParty);


function calculateTotalPrice(cartForParty) {
let totalPrice = 0;
for (let key in cartForParty) {
totalPrice += cartForParty[key];
};
console.log(`Now the sum is ${totalPrice}`);
return totalPrice;
};

// ! Test functions (plain vanilla JavaScript)
function test1() {
 console.log('\nTest 1: calculateTotalPrice should take one parameter');
 console.assert(calculateTotalPrice.length === 1);
}

function test2() {
 console.log('\nTest 2: return correct output when passed cartForParty');
 const expectedTotalPrice = 1.75 + 0.99 + 12 + 4.99 + 5.12;  
 const result = calculateTotalPrice(cartForParty);
 console.assert(result === expectedTotalPrice, `Expected ${expectedTotalPrice} but got ${result}`);
 }

function test() {
 test1();
 test2();
}

test();