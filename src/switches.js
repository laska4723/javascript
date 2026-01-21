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

export const showOrderStatus = (orderStatus) => {
  switch (orderStatus) {
    case 'Формируются чеки':
    case 'Назначаются повара':
      console.log(chalk.blue('Обрабатывается'));
      break;

    case 'Запекается':
    case 'Нарезается':
    case 'Варится':
    case 'Жарится':
    case 'Поиск курьера':
      console.log(chalk.yellow('Готовится'));
      break;

    case 'Курьер берёт заказ':
    case 'Курьер в пути':
    case 'Курьер подъезжает':
      console.log(chalk.blue('У курьера'));
      break;

    case 'Клиент отказался от заказа':
    case 'Заказ доставлен':
      console.log(chalk.green('Готов'));
      break;

    default:
      console.log(chalk.white('Обрабатывается'));
  }
};
