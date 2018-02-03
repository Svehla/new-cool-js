const R = require('ramda')
const c = console.log
const o = { a: { } };
const lol = o?.a?.b
const numbers = [1,2,3,10]
  |> R.map(R.multiply(2))
  |> R.sum
  |> R.add(1)

const is5LargerThan4 = (5 |> R.gt)(4)
c(numbers)
c(numbers)
c(is5LargerThan4)
