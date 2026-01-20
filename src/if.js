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
