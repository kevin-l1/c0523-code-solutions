/* exported flatten */
function flatten(array) {
  const newArray = array.map((e) => e);
  for (let i = 0; i < array.length; i++) {
    if (newArray[i].includes('[]')) {
      console.log('hi');
      newArray[i].remove('[]');
    }
  }
  console.log(newArray);
  return newArray;
}
