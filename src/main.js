import { lenText, formatText, isStringStartsWith, getWelcomeMessage, logStringInfo } from './strings.js';

console.log(lenText('Привет!'));
console.log(lenText('Это очень длинная строка :)'));

console.log();

console.log(formatText('МОЛОКО'));
console.log(formatText('картошка'));
console.log(formatText('СтРаНнОе СлОвО'));

console.log();

console.log(isStringStartsWith('Ветеринар', 'вет'));
console.log(isStringStartsWith('Молоко', 'мол'));
console.log(isStringStartsWith('Карго Корги', 'КАРГО '));
console.log(isStringStartsWith('Карго Корги', 'кор '));
console.log(isStringStartsWith('Ковёр', 'кова '));

console.log(' ');

console.log(getWelcomeMessage('Сергей', 28));

console.log(' ');

console.log(logStringInfo('Гренландия'));
