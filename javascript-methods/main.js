const x = 5;
const y = 8;
const z = 12;
const maximumValue = Math.max(x, y, z);
console.log(maximumValue);

const heroes = [
  'Batman',
  'Superman',
  'Spiderman',
  'Ironman',
];

let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

const randomIndex = Math.floor(randomNumber);
console.log(randomIndex);

const randomHero = heroes[randomIndex];
console.log(randomHero)


const library = [
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

const lastBook = library.pop();
console.log(lastBook);

const firstBook = library.shift();
console.log(firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1,1);

console.log(library);


const fullName = 'Kevin' + ' ' + 'Li';
const firstAndLastName = fullName.split(' ')
console.log(firstAndLastName);

const firstName = firstAndLastName[0];

const sayMyName = firstName.toUpperCase();
console.log(sayMyName);
