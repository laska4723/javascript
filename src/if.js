import chalk from 'chalk';

export const isAgeValid = (age) => {
  if (age >= 18) {
    return chalk.green('true');
  } else {
    return chalk.red('false');
  }
};
