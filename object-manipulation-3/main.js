console.log('Lodash is loaded:', typeof _ !== 'undefined');
const players = [
  { name: 'John' },
  { name: 'Alice' },
  { name: 'Mary' },
  { name: 'Tom' },
];

const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
const deck = [];

for (let i = 0; i < rank.length; i++) {
  deck.push({ name: rank[i], suite: 'clubs' });
  deck.push({ name: rank[i], suite: 'diamonds' });
  deck.push({ name: rank[i], suite: 'hearts' });
  deck.push({ name: rank[i], suite: 'spades' });
}

const shuffledDeck = _.shuffle(deck);

for (let i = 0; i < players.length; i++) {
  const cardOne = Math.round(Math.random() * (shuffledDeck.length - 1));
  players[i].hand = { card1: shuffledDeck[cardOne] };
  shuffledDeck.splice(cardOne, 1);

  const cardTwo = Math.round(Math.random() * (shuffledDeck.length - 1));
  players[i].hand.card2 = shuffledDeck[cardTwo];
  shuffledDeck.splice(cardTwo, 1);
}

console.log('players:', players);

for (let i = 0; i < players.length; i++) {
  let score = 0;
  if (players[i].hand.card1.name === 'ace') {
    score += 11;
  } else if (
    players[i].hand.card1.name === 'jack' ||
    players[i].hand.card1.name === 'queen' ||
    players[i].hand.card1.name === 'king'
  ) {
    score += 10;
  } else {
    score += players[i].hand.card1.name;
  }

  if (players[i].hand.card2.name === 'ace') {
    score += 11;
  } else if (
    players[i].hand.card2.name === 'jack' ||
    players[i].hand.card2.name === 'queen' ||
    players[i].hand.card2.name === 'king'
  ) {
    score += 10;
  } else {
    score += players[i].hand.card2.name;
  }
  players[i].score = score;
}

if (
  players[0].score > players[1].score &&
  players[0].score > players[2].score &&
  players[0].score > players[3].score
) {
  console.log(`${players[0].name} wins!`);
}
if (
  players[1].score > players[0].score &&
  players[1].score > players[2].score &&
  players[1].score > players[3].score
) {
  console.log(`${players[1].name} wins!`);
}
if (
  players[2].score > players[0].score &&
  players[2].score > players[1].score &&
  players[2].score > players[3].score
) {
  console.log(`${players[2].name} wins!`);
}
if (
  players[3].score > players[0].score &&
  players[3].score > players[1].score &&
  players[3].score > players[2].score
) {
  console.log(`${players[3].name} wins!`);
}
