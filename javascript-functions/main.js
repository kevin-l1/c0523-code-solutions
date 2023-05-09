function convertMinutesToSeconds(minutes) {
  const minutesToSeconds = minutes * 60;
  return minutesToSeconds;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(300);
console.log('convertMinutesToSeconds Result:', convertMinutesToSecondsResult);

function greet(name) {
  const greetings = 'Hey, ' + name;
  return greetings;
}
const greetResult = greet('Beavis');
console.log('greet Result:', greetResult);

function getArea(width, height) {
  const area = width * height;
  return area;
}
const getAreaResult = getArea(17, 42);
console.log('getArea Result:', getAreaResult);

function getFirstName(person) {
  person = {
    firstName: 'Lelouch',
    lastName: 'Lamperouge',
  };
  return person.firstName;
}
const getFirstNameResult = getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
});
console.log('getFirstName Result:', getFirstNameResult);

function getLastElement(array) {
  const lastElement = array[array.length - 1];
  return lastElement;
}
const getLastElementResult = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log('getLastElement Result:', getLastElementResult);
