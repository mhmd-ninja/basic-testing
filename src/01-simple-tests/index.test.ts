// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const inputs = {a: 1, b: 2, action: Action.Add }
    const res = simpleCalculator(inputs);
    expect(res).toBe(3); 
  });

  test('should subtract two numbers', () => {
    const inputs = {a: 2, b: 2, action: Action.Subtract }
    const res = simpleCalculator(inputs);
    expect(res).toBe(0); 
  });

  test('should multiply two numbers', () => {
    const inputs = {a: 1, b: 2, action: Action.Multiply }
    const res = simpleCalculator(inputs);
    expect(res).toBe(2); 
  });

  test('should divide two numbers', () => {
    const inputs = {a: 4, b: 2, action: Action.Divide }
    const res = simpleCalculator(inputs);
    expect(res).toBe(2); 
  });

  test('should exponentiate two numbers', () => {
    const inputs = {a: 2, b: 2, action: Action.Add }
    const res = simpleCalculator(inputs);
    expect(res).toBe(4); 
  });

  test('should return null for invalid action', () => {
    const inputs = {a: 1, b: 2, action: 'invalidAction' }
    const res = simpleCalculator(inputs);
    expect(res).toBeNull(); 
  });

  test('should return null for invalid arguments', () => {
    const inputs = {a: null, b: 2, action: Action.Add }
    const res = simpleCalculator(inputs);
    expect(res).toBeNull(); 
  });
});
