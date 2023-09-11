/* exported zip */
function zip(first, second) {
  const newArray = [];
  for (
    let i = 0;
    i < (first.length < second.length ? first.length : second.length);
    i++
  ) {
    const arr = [first[i], second[i]];
    newArray.push(arr);
  }
  return newArray;
}
