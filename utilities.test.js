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

describe('isIE', () => {
  xtest('sets "ie" class on the body if the browser is "ie"', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: "Internet Explorer 11",
      writable: true
    });

    //window.navigator.userAgent = "Internet Explorer 11"
    document.body.innerHTML = '<body></body>';

    utilities.isIE;

    expect(document.getElementsByTagName('body')[0].className).toMatch(/ie/);
  });
});

describe('theId', () => {
  test('returns false if the element does not exist on the page', () => {
    document.body.innerHTML = '<div><div id="the_element"></div></div>';
    expect(utilities.theId("my_element")).toBe(false);
  });

  test('returns the element if it exists', () => {
    document.body.innerHTML = '<div><div id="the_element">test value</div></div>';
    expect(utilities.theId("the_element").innerHTML).toEqual('test value');
  });
});

describe('theClass', () => {
  test('returns false if the element does not exist on the page', () => {
    document.body.innerHTML = '<div><div class="the_class">class value</div></div>';
    expect(utilities.theClass("the_class").innerHTML).toEqual('class value');
  });

  test('returns element if it exists', () => {
    document.body.innerHTML = '<div><div class="the_class">class value</div></div>';
    expect(utilities.theClass("the_class").innerHTML).toEqual('class value');
  });

  test('returns the first element if two have the same class', () => {
    document.body.innerHTML = `<div>
      <div class="the_class">class value</div>
      <div class="the_class">class value 2</div>
    </div>`;
    expect(utilities.theClass("the_class").innerHTML).toEqual('class value');
  });
});

describe('queryApi', () => {
  beforeEach(() => {
    fetch.resetMocks()
  });
  test('returns the correct data', () => {
    fetch.mockResponseOnce(JSON.stringify( [ { data: '12345' } ] ))
    const queryResponse = jest.fn();
    const queryError = jest.fn();

    return utilities.queryApi('www.example.com')
      .then(queryResponse)
      .catch(queryError)
      .finally(() => {
        expect(queryResponse).toHaveBeenCalled();
        expect(queryError).not.toHaveBeenCalled();
        expect(queryResponse.mock.calls[0][0][0]).toEqual({ data: '12345' })
      });
  });

  test('throws an error when the response is not a valid data structure', () => {
    fetch.mockResponseOnce(JSON.stringify( {} ))
    const queryResponse = jest.fn();
    const queryError = jest.fn();

    return utilities.queryApi('www.example.com')
      .then(queryResponse)
      .catch(queryError)
      .finally(() => {
        expect(queryResponse).not.toHaveBeenCalled();
        expect(queryError).toHaveBeenCalled();
        expect(queryError.mock.calls[0][0].message).toEqual('Something failed!');
      });
  });
});
