/* exported pick */

function pick(source, keys) {
  let obj = {};

  for (let item in source) {
    if (keys.includes(item) && source[item] !== undefined) {
      obj[item] = source[item];
    }
  }

  return obj;
}
