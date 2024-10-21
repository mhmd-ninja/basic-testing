// Uncomment the code below and write your tests
import {  simpleCalculator, Action } from './index';

const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 5, b: 2, action: Action.Subtract, expected: 3 },
    { a: 4, b: 2, action: Action.Multiply, expected: 8 },   
    { a: 10, b: 2, action: Action.Divide, expected: 5 },
    { a: 4, b: 2, action: Action.Exponentiate, expected: 16 },
    { a: 3, b: 2, action: 'invalid', expected: null },  
    { a: null, b: 2, action: Action.Multiply, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'calculating %d and %d with the %s operation should return %s',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    },
  );
});
