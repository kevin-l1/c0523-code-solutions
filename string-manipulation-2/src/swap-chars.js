function swapChars(firstIndex, secondIndex, string) {
  let newWord = '';
  for (let i = 0; i < string.length; i++) {
    if (i == firstIndex) {
      newWord += string[secondIndex];
    } else if (i == secondIndex) {
      newWord += string[firstIndex];
    } else {
      newWord += string[i];
    }
  }
  return newWord
}

// function swapChars(firstIndex, secondIndex, string) {
//   return string.slice(0, firstIndex) + string[secondIndex] + string.slice(firstIndex + 1, secondIndex) + string[firstIndex] + string.slice(secondIndex + 1);
// }
