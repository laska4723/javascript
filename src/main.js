import { generateInteger, getSquareArea, getCircleArea, isEven, calculateChange, printCheck } from './numbers.js';

console.log(generateInteger(0, 5));

console.log();

const squareSide = generateInteger(1, 11);
const squareArea = getSquareArea(squareSide);
console.log(`Площадь квадрата со стороной a=${squareSide} равна ${squareArea}`);

console.log();

const circleRadius = generateInteger(3, 13);
const circleArea = getCircleArea(circleRadius);
console.log(`Радиус: ${circleRadius}\nПлощадь: ${circleArea}`);

console.log();

const num = generateInteger(1, 99);
const even = isEven(num);
console.log(`Число: ${num}\n${even}`);

console.log(' ');

console.log(calculateChange(34580));

console.log(' ');

printCheck(12.3, 9.8);
printCheck(4.8, 2);
printCheck(5, 4.2);
