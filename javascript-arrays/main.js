const colors = ['red', 'white', 'blue'];
console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);

console.log(
  'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.'
);

colors[2] = 'green';

console.log(
  'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.'
);

console.log('value of colors:', colors);

const students = ['John', 'Bob', 'Nancy', 'Amanda'];
const numberOfStudents = students.length;
console.log('value of numberofStudents:', numberOfStudents);

const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log('value of lastStudent:', lastStudent);

console.log('value of students:', students);
