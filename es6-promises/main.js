import takeAChance from './take-a-chance.js';

const obj = takeAChance('Kevin');

const error = new Error('Failure...');

obj.then(() => console.log('Success!')).catch(() => console.error(error));
