import chalk from 'chalk';

export const len = (str) => {
  return str.length;
};

export const func = (str) => {
  const lower = str.toLowerCase();
  const green = chalk.green;
  const blue = chalk.blue;

  return green(lower[0].toUpperCase()) + blue(lower.slice(1, -1)) + green(lower.at(-1).toUpperCase());
};

export const isStringStartsWith = (text, part) => {
  return text.toLowerCase().startsWith(part.toLowerCase());
};
