/* exported drop */
function drop(array, count) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i > count - 1)
    newArray.push(array[i])
  }
return newArray;
}
