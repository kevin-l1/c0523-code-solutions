/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
};


function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}


function startsWithJ(string) {
  if (string.charAt(0) === 'j' || string.charAt(0) === 'J') {
    return true;
  } else {
    return false;
  }
}


function isOldEnoughToDrink(person) {
  if (person[age] >= 21) {
    return true;
  } else {
    return false;
  }
}


function isOldEnoughToDrive(person) {
  if (person[age] >= 16) {
    return true;
  } else {
    return false;
  }
}


function isOldEnoughToDrinkAndDrive(person) {
  if (person[age] >= 21) {
    return true;
  } else {
    return false;
  }
}


function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'Neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'Acid';
  } else if (pH > 7 && pH <= 14) {
    return 'Base';
  } else {
    return 'Invalid pH level';
  }
}


function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return "Goodnight everybody!";
  }
}


function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Die Hard';
      break;
    case 'comedy':
      return 'Hahahaha';
      break;
    case 'horror':
      return 'Ohhh, scary';
      break;
    case 'drama':
      return 'How touching!';
      break;
    case 'musical':
      return 'How beautiful!';
      break;
    case 'sci-fi':
      return 'Aktshually';
      break;
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
