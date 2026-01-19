import {
  generateInteger,
  getSquareArea,
  getCircleArea,
  isEven,
  calculateChange,
  printCheck,
  calculateDesks,
  TerraRandomis,
} from './numbers.js';

import chalk from 'chalk';

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

calculateChange(34580);

console.log(' ');

printCheck(12.3, 9.8);
printCheck(4.8, 2);
printCheck(5, 4.2);

console.log(' ');

const classes = 13;
const students = 7;
const totalDesks = calculateDesks(13, 7);
console.log(`Для ${classes} классов по ${students} учеников в каждом, необходимо купить ${totalDesks} парт(ы)\n`);

const terraRandomis = TerraRandomis();
console.log(`Прогноз погоды на TerraRandomis: Температура завтра ${chalk.green(terraRandomis)} ${chalk.blue('C')}`);
