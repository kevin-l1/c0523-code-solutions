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
  if (string.charAt(0) === 'j') {
    return true;
  } else {
    return false;
  }
}


function isOldEnoughToDrink(person) {
  if (person['age'] >= 21) {
    return true;
  } else {
    return false;
  }
}


function isOldEnoughToDrive(person) {
  if (person['age'] >= 16) {
    return true;
  } else {
    return false;
  }
}


function isOldEnoughToDrinkAndDrive(person) {
    return false;
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
  switch(name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return "Goodnight everybody!";
  }
}


function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'Hahahaha';
    case 'horror':
      return 'Ohhh, scary';
    case 'drama':
      return 'How touching!';
    case 'musical':
      return 'How beautiful!';
    case 'sci-fi':
      return 'Aktshually';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
