/* exported invert */
function invert(source) {
  let arr = Object.keys(source);
  let obj = {};
  for (let item in source) {
    for (let i = 0; i < arr.length; i++) {
      obj[source[item]] = item;
    }
  }
  return obj;
}
