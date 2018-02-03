const R = require('ramda')
const o = { a: { } };
const lol = o?.a?.b
const numbers = [1,2,3,10]
  |> R.map(x => x * 2)
  |> R.reduce( (a,b) => a + b )
  |> R.add(1);
  
console.log(numbers); // [ 1, 2 ]
console.log(lol); // undefined
