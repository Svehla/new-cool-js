var _o$a, _, _ref, _ref2, _ref3;

const R = require('ramda');

const c = console.log;
const o = {
  a: {}
};
const lol = o === null || o === void 0 ? void 0 : (_o$a = o.a) === null || _o$a === void 0 ? void 0 : _o$a.b;
const numbers = [1, 2, 3, 10];
const is5LargerThan4 = (_ = 5, R.gt(_))(4);
const someOperatoins = (_ref = (_ref2 = (_ref3 = [1, 2, 3, 10], R.map(R.multiply(2))(_ref3)), R.sum(_ref2)), R.add(1)(_ref));
const binaryPipeComp1 = R.map(R.multiply(2))([1, 2, 3, 10]);
const binaryPipeComp = R.map(R.multiply(2))(binaryPipeComp1);
const isInArr = R.contains(5)([1, 2, 3, 4]);
console.log("numbers: ", numbers);
console.log("someOperatoins: ", someOperatoins);
console.log("binaryPipeComp1: ", binaryPipeComp1);
console.log("binaryPipeComp: ", binaryPipeComp);
console.log("is5LargerThan4: ", is5LargerThan4);
console.log("isInArr: ", isInArr);
