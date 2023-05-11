/* exported isVowel */
function isVowel(character) {
  switch (character) {
    case 'a':
    case 'A':
      return true;
    case 'e':
    case 'E':
      return true;
    case 'i':
    case 'I':
      return true;
    case 'o':
    case 'O':
      return true;
    case 'u':
    case 'U':
      return true;
    default:
      return false;
  }
}
