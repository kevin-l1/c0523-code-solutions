/* exported takeRight */
function takeRight(array, count) {
  const newArray = [];
  for (let i = 0; i < count; i++) {
    if (array.length < count) {
      return array;
    } else {
      newArray.push(array[array.length - (count - i)])
    }
  }
  return newArray;
}
