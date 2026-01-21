import chalk from 'chalk';

export const spongeBob = (character) => {
  switch (character) {
    case 'spongebob':
      console.log(chalk.yellow('| ( · )( · ) |'));
      break;

    case 'patrick':
      console.log(chalk.magenta('/ ( · )( · ) \\'));
      break;

    case 'squidward':
      console.log(chalk.cyan('( ( · )( · ) )'));
      break;

    case 'plankton':
      console.log(chalk.hex('#006400')('| ( · ) |'));
      break;

    case 'mr. crabs':
      console.log(chalk.red('|·||·|'));
      break;

    default:
      console.log('Неизвестный персонаж');
  }
};
