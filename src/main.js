import { isAgeValid } from './if.js';
import { generateInteger } from './numbers.js';

const age = generateInteger(15, 23);
console.log(`Возраст: ${age}\n${isAgeValid(age)}`);
