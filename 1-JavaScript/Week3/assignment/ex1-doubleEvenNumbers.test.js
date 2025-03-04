// ! Function to be tested
function doubleEvenNumbers(numbers) {
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  const doubledNumbers = evenNumbers.map(num => num * 2);
  return doubledNumbers;
  }

// ! Unit test (using Jest)
describe('js-wk3-ex1-doubleEvenNumbers', () => {
  test('doubleEvenNumbers should take the even numbers and double them', () => {
    const actual = doubleEvenNumbers([1, 2, 3, 4]);
    const expected = [4, 8];
    expect(actual).toEqual(expected);
  });
});
