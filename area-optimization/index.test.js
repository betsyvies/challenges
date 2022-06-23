const { getLargestArea } = require('./index');
const { getElemOfRange } = require('./utils/general');

describe('getLargestArea test successful', () => {
  test('should return 49 with [1, 8, 6, 2, 5, 4, 8, 3, 7]', () => {
    expect(getLargestArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });
  test('should return 1 with [1, 1]', () => {
    expect(getLargestArea([1, 1])).toBe(1);
  });
  test('should return 6 with [1, 2, 3, 4, 5]', () => {
    expect(getLargestArea([1, 2, 3, 4, 5])).toBe(6);
  });
  test('should return 44 with [0, 22, 32, 104]', () => {
    expect(getLargestArea([0, 22, 32, 104])).toBe(44);
  });
  test('should return 12 with [1, 104, 3, 6, 0]', () => {
    expect(getLargestArea([1, 104, 3, 6, 0])).toBe(12);
  });
  test('should return 1 with [1, 4, 0, 0, 0]', () => {
    expect(getLargestArea([1, 4, 0, 0, 0])).toBe(1);
  });
  test('should return 103 with [1, 104, 103, 6, 0]', () => {
    expect(getLargestArea([1, 104, 103, 6, 0])).toBe(103);
  });
});

describe('getLargestArea test error', () => {
  test('should return "The array must be a number integer list" when array list is not a number list', () => {
    expect(() => getLargestArea(['1', '2'])).toThrowError('The array must be a number integer list');
    expect(() => getLargestArea([undefined, null])).toThrowError('The array must be a number integer list');
    expect(() => getLargestArea(['a', 1])).toThrowError('The array must be a number integer list');
    expect(() => getLargestArea([1.2, 4])).toThrowError('The array must be a number integer list');
  });
  test('should return "The array length must be >= 2 and <= 105" with array length >= 2 and <= 105', () => {
    expect(() => getLargestArea([1])).toThrowError('The array length must be >= 2 and <= 105');
    expect(() => getLargestArea([])).toThrowError('The array length must be >= 2 and <= 105');
    expect(() => getLargestArea([...getElemOfRange(1, 106)])).toThrowError('The array length must be >= 2 and <= 105');
  });
  test('should return "The array elements must be >= 0 and <= 104" with array elements >= 0 and <= 104', () => {
    expect(() => getLargestArea([0, 2, 4, 105])).toThrowError('The array elements must be >= 0 and <= 104');
    expect(() => getLargestArea([-1, 2, 3, 4])).toThrowError('The array elements must be >= 0 and <= 104');
    expect(() => getLargestArea([0, 104, -1])).toThrowError('The array elements must be >= 0 and <= 104');
  });
});
