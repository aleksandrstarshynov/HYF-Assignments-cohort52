const fruitBasket = [
  'apple',
  'lemon',
  'grapefruit',
  'lemon',
  'banana',
  'watermelon',
  'lemon',
];

const forbidden = 'lemon';

// ! Function under test
function sanitizeFruitBasket(fruitBasket, forbidden) {  
  const basket = fruitBasket.filter(fruit => fruit !== forbidden);
  return basket;
}

// ! Unit tests (using Jest)
describe('js-wk3-ex3-lemonAllergy', () => {
  test('sanitizeFruitBasket should take two parameters', () => {
    // TODO replace next line with your code
    expect(false).toBe(true);
  });

  test('sanitizeFruitBasket should not modify the original `fruitBasket` array', () => {
    // Save the original contents of the fruit basket
    const originalFruitBasketContents = [...fruitBasket];
    // TODO replace next line with your code
    expect(false).toBe(true);
  });

  test('sanitizeFruitBasket should return a new array that does not include the unwanted `lemon`', () => {
    // TODO replace next line with your code
    expect(false).toBe(true);
  });
});
