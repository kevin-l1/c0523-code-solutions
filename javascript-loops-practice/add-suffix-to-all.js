/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  let newArray = [];
  for (let i = 0; i < words.length; i++) {
    newArray.push(words[i] + suffix);
  }
  return newArray;
}
