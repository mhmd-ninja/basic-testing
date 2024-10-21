import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    const values = [4, 5, 6];
    const result = generateLinkedList(values);

    expect(result).toStrictEqual({
      value: 4,
      next: {
        value: 5,
        next: {
          value: 6,
          next: { value: null, next: null },
        },
      },
    });
  });

  test('should generate linked list from values 2', () => {
    const values = [4, 5, 6];
    const result = generateLinkedList(values);

    expect(result).toMatchSnapshot();
  });
});