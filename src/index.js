const R = require('ramda')
const o = { a: { } };
const lol = o?.a?.b
const numbers = [1,2,3,10] |> R.filter(R.gt(3))
console.log(numbers); // [ 1, 2 ]
console.log(lol); // undefined
