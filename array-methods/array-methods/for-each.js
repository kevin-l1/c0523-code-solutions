const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('Values Array')
values.forEach((elem) => console.log(elem))

console.log('Reversed Values Array')
values.forEach((elem, indexNum) => console.log(values[values.length - 1 -indexNum]))
