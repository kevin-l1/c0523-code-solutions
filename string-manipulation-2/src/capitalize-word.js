/* exported capitalizeWord */
function capitalizeWord(word) {
  let firstLetter = word.slice(0,1).toUpperCase()
  let restLetter = word.slice(1).toLowerCase()
  let newWord = firstLetter + restLetter
  if (newWord === 'Javascript') {
    newWord = 'JavaScript';
  }
  return newWord
}
