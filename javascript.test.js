const utilities = require('./javascript');

describe('isNumber', () => {
  test('returns true when a number is passed in', () => {
    expect(utilities.isNumber(1)).toBe(true);
  });
});
