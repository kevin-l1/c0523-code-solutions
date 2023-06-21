const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const map1 = prices.map((num) => ({price: num, salePrice: num/2}))
console.log(map1)

const map2 = prices.map((num) => '$' + num)
console.log(map2)
