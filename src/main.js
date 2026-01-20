import { generateInteger } from './numbers.js';
import { isAgeValid, fizzBuzz, generateRandomYear, isYearLeap } from './if.js';

const randomAge = generateInteger(15, 23);
console.log(`Возраст: ${randomAge}\n${isAgeValid(randomAge)}`);

console.log();

const randomNumber = generateInteger(9, 21);
console.log(`Число: ${randomNumber}\n${fizzBuzz(randomNumber)}`);

console.log();

const randomYear = generateRandomYear();
console.log(`Год: ${randomYear}\n${isYearLeap(randomYear)}`);
