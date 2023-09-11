/* exported equal */
function equal(first, second) {
  let count = 0;
  for (let i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      count++;
    }
  }

  if (count === first.length && first.length === second.length) {
    return true;
  } else {
    return false;
  }
}
