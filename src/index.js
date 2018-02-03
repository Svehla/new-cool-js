const R = require('ramda')
const c = console.log
const o = { a: { } };
const lol = o?.a?.b
const numbers = [1,2,3,10]
const is5LargerThan4 = (5 |> R.gt)(4)
const someOperatoins = [1,2,3,10]
  |> R.map(R.multiply(2))
  |> R.sum
  |> R.add(1)

const binaryPipeComp1 =
  R.map(R.multiply(2)) << [1,2,3,10]

const binaryPipeComp =
  binaryPipeComp1 >> R.map(R.multiply(2))



console.log(numbers)
console.log(someOperatoins)
console.log(binaryPipeComp1)
console.log(binaryPipeComp)
console.log(is5LargerThan4)

const add3 = x => x + 3
const add2 = x => x + 2

const y = 5 >> R.contains << [1,2,3,4]

console.log(y)
