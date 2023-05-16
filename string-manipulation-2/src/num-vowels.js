/* exported numVowels */
function numVowels(string) {
  let vowels = 0;
  for (let i = 0; i < string.length; i++) {
    switch (string.charAt(i)) {
      case 'A':
      case 'a':
      case 'E':
      case 'e':
      case 'I':
      case 'i':
      case 'O':
      case 'o':
      case 'U':
      case 'u':
        vowels += 1;
        break;
      default:
        break;
    }
  }
  return vowels;
}
