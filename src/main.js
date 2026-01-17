import chalk from 'chalk';

const date = new Date().toISOString();

// Серый цвет по синему фону
console.log(chalk.gray.bgBlue(date));

// Зелёный цвет по чёрному фону
console.log(chalk.green.bgBlack(date));

// Красный цвет по серому фону
console.log(chalk.red.bgGray(date));

// Синий цвет по зелёному фону
console.log(chalk.blue.bgGreen(date));
