/* exported capitalizeWords */
function capitalizeWords(string) {
  const array = string.split(' ');
  let firstLetter = '';
  let restLetter = '';
  let newWord = ''
  for (let i = 0; i < array.length; i++) {
    firstLetter = array[i].slice(0,1).toUpperCase();
    restLetter = array[i].slice(1).toLowerCase();
    if (i === array.length - 1) {
      newWord += (firstLetter + restLetter);
    } else {
      newWord += (firstLetter + restLetter + ' ');
    }
  }
  return newWord;
}
