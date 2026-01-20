import { generateInteger } from './numbers.js';
import { isAgeValid, fizzBuzz } from './if.js';

const age = generateInteger(15, 23);
console.log(`Возраст: ${age}\n${isAgeValid(age)}`);

console.log();

const number = generateInteger(9, 21);
console.log(`Число: ${number}\n${fizzBuzz(number)}`);
