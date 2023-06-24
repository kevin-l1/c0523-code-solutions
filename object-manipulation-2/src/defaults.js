/* exported defaults */
function defaults(target, source) {
  const sourceArr = Object.keys(source);
  for (let item in source) {
    if (!Object.hasOwn(target, item)) {
      target[item] = source[item];
    }
  }
}
