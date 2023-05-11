/* exported getWords */
function getWords(string) {
  let newArray = [];
  if (string === '') {
    newArray = [];
  } else {
    newArray = string.split(' ');
  }
  return newArray;
}
