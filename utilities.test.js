import { utilities } from './utilities';
import { isTSAnyKeyword } from '@babel/types';

describe('elementExists', () => {
  test('returns true if the element exists on the the page', () => {
    document.body.innerHTML = '<div><div id="my_element"></div></div>';
    expect(utilities.elementExists("#my_element")).toBe(true);
  });

  test('returns false if the element does not does not exist on the page', () => {
    document.body.innerHTML = '<div><div id="not_my_element"></div></div>';
    expect(utilities.elementExists("#my_element")).toBe(false);
  });
});

describe('trim', () => {
  test('returns a string with the whitespace removed from either end', () => {
    expect(utilities.trim(" my value    ")).toMatch(/my value/);
  });

  test('does not trim whitespace from the middle of a string', () => {
    expect(utilities.trim("my     value")).toMatch(/my     value/);
  });
});

describe('getUrl', () => {
  test('returns the URL from the current page', () => {
    window.history.pushState({}, 'Test Title', 'http://localhost?seach=val');
    expect(utilities.getUrl()).toMatch(/localhost/);
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
