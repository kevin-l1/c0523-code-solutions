/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while(currentNumber < 10) {
    numbers.push(currentNumber);
    currentNumber++
  }
  return numbers;
}
console.log('getNumbersToTen(6) Result:', getNumbersToTen(6))


function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while(currentNumber < 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('getEvenNumbersToTwenty(4) Result:', getEvenNumbersToTwenty(4))


function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while(count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log('repeatWord("apple", 7) Result:', repeatWord("apple", 7))


function logEachCharacter(string) {
  for(let i = 0; i < string.length; i++) {
    console.log('logEachCharacter Result:',string[i])
  }
}
console.log('logEachCharacter("Hungry") Result:', logEachCharacter('Hungry'));


function doubleAll(numbers) {
  const doubled = [];
  for(let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
    doubled.push(numbers[i]);
  }
  return doubled;
}
console.log('doubleAll Result:', doubleAll([1,3,5]))


let games = {
  'LOL': "League of Legends",
  "VAL": "Valorant",
  "TFT": "Team Fight Tactics",
}

function getKeys(object) {
  const keys = [];
  for(let key in object) {
    keys.push(key)
  }
  return keys;
}
console.log('getKeys(games) Result:', getKeys(games));


function getValues(object) {
  const values = [];
  for (let key in object) {
    values.push(object[key]);
  }
  return values
}
console.log('getValues(games) Result:', getValues(games))
