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
  xtest('returns the correct data', () => {

    function handleData(data) {
      debugger;
    }

    api_call = utilities.queryApi(
      'https://cat-fact.herokuapp.com/facts',
      handleData
    )

    expect(api_call).toEqual("");
  });
});
