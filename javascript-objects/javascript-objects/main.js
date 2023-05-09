const student = {
  firstName: 'Kevin',
  lastName: 'Li',
  age: 21,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Business Consultant';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

const vehicle = {
  make: 'Toyota',
  model: 'SUV',
  year: 2001,
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

const pet = {
  name: 'fluffy',
  type: 'cat',
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
