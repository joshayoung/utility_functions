import { utilities } from './utilities';
import { isTSAnyKeyword } from '@babel/types';

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

describe('elementExists', () => {
  test('returns the correct element from the page', () => {
    document.body.innerHTML = '<div><div id="my_element"></div></div>';
    expect(utilities.elementExists("#my_element")).toBe(true);
  });

  test('does not return true if the element does not exist', () => {
    document.body.innerHTML = '<div><div id="not_my_element"></div></div>';
    expect(utilities.elementExists("#my_element")).toBe(false);
  });
});
