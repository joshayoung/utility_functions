  import { utilities } from "./utilities.js"
  let sandbox = document.getElementById("sandbox");
  let proxy = 'https://cors-anywhere.herokuapp.com/';
  let url = 'https://cat-fact.herokuapp.com/facts';
  let data_promise = utilities.queryApi(proxy + url);
  debugger;
