import chalk from 'chalk';

export const len = (str) => {
  return str.length;
};

export const formatText = (text) => {
  const lower = text.toLowerCase();
  const first = chalk.green(lower[0].toUpperCase());
  const middle = chalk.blue(lower.slice(1, -1));
  const last = chalk.green(lower.at(-1).toUpperCase());

  return first + middle + last;
};

export const isStringStartsWith = (text, part) => {
  const lowerText = text.toLowerCase();
  const lowerPart = part.toLowerCase();

  return lowerText.startsWith(lowerPart);
};

export const getWelcomeMessage = (name, age) => {
  return `Добро пожаловать!\nИмя: ${name}\nВозраст: ${age}\nНадеемся, Вам понравится пользоваться нашим сервисом!`;
};

export const logStringInfo = (text) => {
  const len = text.length;
  const first = chalk.yellow(text[0]);
  const last = chalk.green(text.at(-1));

  return `Символов: ${len}\nПервый: ${first}\nПоследний: ${last}`;
};
