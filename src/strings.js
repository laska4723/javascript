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

export const getWelcomeMessage = (name, age) => {
  return `Добро пожаловать!\nИмя: ${name}\nВозраст: ${age}\nНадеемся, Вам понравится пользоваться нашим сервисом!`;
};

export const logStringInfo = (text) => {
  const len = text.length;
  const first = chalk.yellow(text[0]);
  const last = chalk.green(text.at(-1));

  return `Символов: ${len}\nПервый: ${first}\nПоследний: ${last}`;
};
