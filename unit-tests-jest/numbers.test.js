import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('toDollars', () => {
  it('returns a number formatted in dollars and cents', () => {
    const amount = 11.341;
    const result = toDollars(amount);
    expect(result).toEqual('$11.34');
  });
});

describe('divideBy', () => {
  it('returns a new array of numbers where every entry has been divided by the given divisor', () => {
    const numbers = [3, 9, 6, 12, 0];
    const divisor = 3;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([1, 3, 2, 4, 0]);
  });
});

describe('multiplyBy', () => {
  it('returns a modified object by multiplying the value of each key, but only if that value is a number', () => {
    const obj = { 1: 'apple', 2: 4, 3: 'orange', 4: 6 };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ 1: 'apple', 2: 8, 3: 'orange', 4: 12 });
  });
});
