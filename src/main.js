import { generateInteger, getSquareArea } from './numbers.js';

console.log(generateInteger(0, 5));

console.log();

const squareSide = generateInteger(1, 11);
const squareArea = getSquareArea(squareSide);
console.log(`Площадь квадрата со стороной a=${squareSide} равна ${squareArea}`);
