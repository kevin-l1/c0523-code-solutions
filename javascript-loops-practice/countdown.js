/* exported countdown */
function countdown(number) {
  const array = [];
  while (number > -1) {
    array.push(number);
    number--;
  }
  return array;
}
