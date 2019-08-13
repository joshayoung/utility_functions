import { utilities } from './utilities';

describe('trim', () => {
  test('returns a string with the whitespace removed from either end', () => {
    expect(utilities.trim(" my value    ")).toMatch(/my value/);
  });

  test('does not trim whitespace from the middle of a string', () => {
    expect(utilities.trim("my     value")).toMatch(/my     value/);
  });
});

describe('isNumber', () => {
  test('returns true when a number is passed in', () => {
    expect(utilities.isNumber(1)).toBe(true);
  });

  test('returns false when a number is not passed in', () => {
    expect(utilities.isNumber("a")).toBe(false);
  });
});
