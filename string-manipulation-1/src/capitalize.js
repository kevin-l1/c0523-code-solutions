/* exported capitalize */
function capitalize(word) {
  let firstLetter = word.slice(0,1).toUpperCase()

  let restLetter = word.slice(1).toLowerCase()

  const newWord = firstLetter + restLetter
  return newWord
}
