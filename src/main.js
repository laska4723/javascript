import { len, func, isStringStartsWith, getWelcomeMessage, logStringInfo } from './strings.js';

console.log(len('Привет!'));
console.log(len('Это очень длинная строка :)'));

console.log();

console.log(func('МОЛОКО'));
console.log(func('картошка'));
console.log(func('СтРаНнОе СлОвО'));

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
