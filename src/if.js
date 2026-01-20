import chalk from 'chalk';

export const isAgeValid = (age) => {
  if (age >= 18) {
    return chalk.green('true');
  } else {
    return chalk.red('false');
  }
};

export const fizzBuzz = (number) => {
  if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
  if (number % 3 === 0) return 'Fizz';
  if (number % 5 === 0) return 'Buzz';

  return number;
};

export const generateRandomYear = () => {
  const min = 1980;
  const max = 2120;

  return (Math.floor(Math.random() * (max / 10 - min / 10 + 1)) + min / 10) * 10;
};

export const isYearLeap = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 'true';
  }

  return 'false';
};
