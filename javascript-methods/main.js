let x = 5;
let y = 8;
let z = 12;
let maximumValue = Math.max(x, y, z);
console.log(maximumValue);

const heroes = [
  'Batman',
  'Superman',
  'Spiderman',
  'Ironman',
];

let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

let randomIndex = Math.floor(randomNumber);
console.log(randomIndex);

let randomHero = heroes[randomIndex];
console.log(randomHero)


let library = [
  {
    title: 'Book1',
    author: 'Ted',
  },
  {
    title: 'Book2',
    author: 'John',
  },
  {
    title: 'Book3',
    author: 'Fred',
  },
];

let lastBook = library.pop();
console.log(lastBook);

let firstBook = library.shift();
console.log(firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1,1);

console.log(library);


let fullName = 'Kevin' + ' ' + 'Li';
let firstAndLastName = fullName.split(' ')
console.log(firstAndLastName);

let firstName = firstAndLastName[0];

let sayMyName = firstName.toUpperCase();
console.log(sayMyName);
