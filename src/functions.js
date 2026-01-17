import chalk from 'chalk';

export const sayHi = (name) => {
  return '\x1b[32m' + 'Привет ' + '\x1b[0m' + '\x1b[34m' + name + '\x1b[0m';
};

export const sayText = (text) => {
  return chalk.white.bgBlack(text);
};

export const sum = (a, b, c, d, e) => {
  return a + b + c + d + e;
};

export const power = (a, b) => {
  return a ** b;
};
