console.log('Lodash is loaded:', typeof _ !== 'undefined');
const players = [
  { name: 'John', hand: 1 },
  { name: 'Alice', hand: 2 },
  { name: 'Mary', hand: 3 },
  { name: 'Tom', hand: 4 },
];

// const deck = [
//   { rank: 2, suite: 'clubs' },
//   { rank: 3, suite: 'clubs' },
//   { rank: 4, suite: 'clubs' },
//   { rank: 5, suite: 'clubs' },
//   { rank: 6, suite: 'clubs' },
//   { rank: 7, suite: 'clubs' },
//   { rank: 8, suite: 'clubs' },
//   { rank: 9, suite: 'clubs' },
//   { rank: 10, suite: 'clubs' },
//   { rank: 'jack', suite: 'clubs' },
//   { rank: 'queen', suite: 'clubs' },
//   { rank: 'king', suite: 'clubs' },
//   { rank: 'ace', suite: 'clubs' },
//   { rank: 2, suite: 'diamonds' },
//   { rank: 3, suite: 'diamonds' },
//   { rank: 4, suite: 'diamonds' },
//   { rank: 5, suite: 'diamonds' },
//   { rank: 6, suite: 'diamonds' },
//   { rank: 7, suite: 'diamonds' },
//   { rank: 8, suite: 'diamonds' },
//   { rank: 9, suite: 'diamonds' },
//   { rank: 10, suite: 'diamonds' },
//   { rank: 'jack', suite: 'diamonds' },
//   { rank: 'queen', suite: 'diamonds' },
//   { rank: 'king', suite: 'diamonds' },
//   { rank: 'ace', suite: 'diamonds' },
//   { rank: 2, suite: 'heart' },
//   { rank: 3, suite: 'heart' },
//   { rank: 4, suite: 'heart' },
//   { rank: 5, suite: 'heart' },
//   { rank: 6, suite: 'heart' },
//   { rank: 7, suite: 'heart' },
//   { rank: 8, suite: 'heart' },
//   { rank: 9, suite: 'heart' },
//   { rank: 10, suite: 'heart' },
//   { rank: 'jack', suite: 'heart' },
//   { rank: 'queen', suite: 'heart' },
//   { rank: 'king', suite: 'heart' },
//   { rank: 'ace', suite: 'heart' },
//   { rank: 2, suite: 'spades' },
//   { rank: 3, suite: 'spades' },
//   { rank: 4, suite: 'spades' },
//   { rank: 5, suite: 'spades' },
//   { rank: 6, suite: 'spades' },
//   { rank: 7, suite: 'spades' },
//   { rank: 8, suite: 'spades' },
//   { rank: 9, suite: 'spades' },
//   { rank: 10, suite: 'spades' },
//   { rank: 'jack', suite: 'spades' },
//   { rank: 'queen', suite: 'spades' },
//   { rank: 'king', suite: 'spades' },
//   { rank: 'ace', suite: 'spades' },
// ];

const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
const deck = [];

for (let i = 0; i < rank.length; i++) {
  deck.push({ name: rank[i], suite: 'clubs' });
  deck.push({ name: rank[i], suite: 'diamonds' });
  deck.push({ name: rank[i], suite: 'hearts' });
  deck.push({ name: rank[i], suite: 'spades' });
}

const shuffledDeck = _.shuffle(deck);

console.log('deck:', shuffledDeck);

for (let i = 0; i < players.length; i++) {
  const cardOne = Math.round(Math.random() * (shuffledDeck.length - 1));
  const cardTwo = Math.round(Math.random() * (shuffledDeck.length - 1));
  players[i].hand.card1 = shuffledDeck[cardOne];
  players[i].hand.card2 = shuffledDeck[cardTwo];
  console.log(cardOne);
  console.log(cardTwo);
  // console.log(shuffledDeck[cardOne]);
  // console.log(shuffledDeck[cardTwo]);
}

console.log(players);
