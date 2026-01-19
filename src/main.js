import { compare, compareStrings } from './compares.js';

console.log(compare(1, 1));
console.log(compare(1, '1'));
console.log(compare(true, true));
console.log(compare(false, false));
console.log(compare(23, 23));
console.log(compare('abc', 'abc'));
console.log(compare('ABC', 'abc'));

console.log();

console.log(compareStrings('1', '1'));
console.log(compareStrings('abc', 'abc'));
console.log(compareStrings('ABC', 'abc'));
