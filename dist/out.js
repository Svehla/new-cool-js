var _response$data, _response$data$user, _response$a, _response$a$user, _response$b, _response$b$user, _ref, _ref2, _ref3, _2, _ref4, _ref5, _3, _ref6, _ref7, _ref8;

const R = require('ramda');

const c = console.log;
const o = {
  a: {}
}; // ~~~~~~~~~~ tilde ~~~~~~~~~

console.log('tilde operator');
console.log(~-2);
console.log(~-1);
console.log(~0); // ~~~ Optional chaining ~~~~

const response = {
  data: {
    user: {
      name: "some name",
      age: 20,
      isClever: false,
      IQ: null
    }
  }
};
const name1 = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$user = _response$data.user) === null || _response$data$user === void 0 ? void 0 : _response$data$user.name; // ’Someone’

const name2 = response === null || response === void 0 ? void 0 : (_response$a = response.a) === null || _response$a === void 0 ? void 0 : (_response$a$user = _response$a.user) === null || _response$a$user === void 0 ? void 0 : _response$a$user.name; // null

const name3 = response === null || response === void 0 ? void 0 : (_response$b = response.b) === null || _response$b === void 0 ? void 0 : (_response$b$user = _response$b.user) === null || _response$b$user === void 0 ? void 0 : _response$b$user.name; // null

console.log("name1: ", name1);
console.log("name2: ", name2);
console.log("name3: ", name3); // ~~~ Pipeline operator ~~~~

const numbers = [1, 2, 3, 10];
const anotherOperations = (_ref = (_ref2 = (_ref3 = [1, 2, 3, 10], _ref3.map(item => item * 2)), _ref2.reduce((x, y) => x + y)), _ref + 1);
const is5LargerThan4 = (_2 = 5, R.gt(_2))(4);
console.log("numbers: ", numbers);
console.log("anotherOperations: ", anotherOperations);
console.log("is5LargerThan4: ", is5LargerThan4);
console.log((_ref4 = (_ref5 = (_3 = 10.123, Math.round(_3)), Math.pow(_ref5, 2)), Math.sqrt(_ref4))); // ~~~ Pipeline operator + ramda ~~~~

const someOperatoins = (_ref6 = (_ref7 = (_ref8 = [1, 2, 3, 10], R.map(R.multiply(2))(_ref8)), R.sum(_ref7)), R.add(1)(_ref6));
console.log("someOperatoins: ", someOperatoins); // ~~~ Custom operators ~~~~
// ~~~ compose operators ~~~~

const binaryPipeComp1 = R.map(R.multiply(2))([1, 2, 3, 10]);
const binaryPipeComp = R.map(R.multiply(2))(binaryPipeComp1);
const isInArr = R.contains(5)([1, 2, 3, 4]);
console.log("binaryPipeComp1: ", binaryPipeComp1);
console.log("binaryPipeComp: ", binaryPipeComp);
console.log("isInArr: ", isInArr);
