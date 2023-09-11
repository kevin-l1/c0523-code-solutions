/* exported union */
function union(first, second) {
  const newArray = first.map((e) => e);
  for (let i = 0; i < second.length; i++) {
    if (!newArray.includes(second[i])) {
      newArray.push(second[i]);
    }
  }
  return newArray;
}
