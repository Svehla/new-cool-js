const R = require('ramda')

const c = console.log
const o = { a: { } };

// ~~~~~~~~~~ tilde ~~~~~~~~~
console.log('tilde operator');
console.log(~-2);
console.log(~-1);
console.log(~0); 

// ~~~ Optional chaining ~~~~
const response = { 
  data: { 
    user: {
      name: "some name",
      age: 20,
      isClever: false,
      IQ: null,
    } 
  } 
}
const name1 = response?.data?.user?.name // ’Someone’
const name2 = response?.a?.user?.name // null
const name3 = response?.b?.user?.name // null
console.log(name1)
console.log(name2)
console.log(name3)
// ~~~ Pipeline operator ~~~~
const numbers = [1,2,3,10]

const anotherOperations = [1, 2, 3, 10]
  |> (_ => _.map(item => item * 2))
  |> (_ => _.reduce((x, y) => x + y))
  |> (_ => _ + 1)

const is5LargerThan4 = (5 |> R.gt)(4)

console.log(numbers)
console.log(anotherOperations)
console.log(is5LargerThan4)
console.log(
  10.123
    |> Math.round
    |> (_ => Math.pow(_, 2))
    |> Math.sqrt
  )

// ~~~ Pipeline operator + ramda ~~~~
const someOperatoins = [1,2,3,10]
  |> R.map(R.multiply(2))
  |> R.sum
  |> R.add(1)

console.log(someOperatoins)

// ~~~~~ Custom operators ~~~~~
// ~~~ + compose operators ~~~~

const binaryPipeComp1 =
  R.map(R.multiply(2)) << [1,2,3,10]

const binaryPipeComp =
  binaryPipeComp1 >> R.map(R.multiply(2))

const isInArr = 5 >> R.contains << [1,2,3,4]

console.log(binaryPipeComp1)
console.log(binaryPipeComp)
console.log(isInArr)
