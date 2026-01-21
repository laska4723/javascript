import { modifyObject, removeProperty, addProperty, compare } from './objects.js';

modifyObject();

console.log();

const user = { id: 1, age: 20, name: 'alex' };
removeProperty(user, 'id');
console.log(user); // { age: 20, name: 'alex' }
removeProperty(user, 'age');
console.log(user); // { name: 'alex' }
removeProperty(user, 'name');
console.log(user); // {}

console.log(' ');

const user1 = { id: 5, name: 'max' };
addProperty(user1, 'address', 'ул. Углеродная 5');
console.log(user1); // { id: 5, name: 'max', address: 'ул. Углеродная 5' }
addProperty(user1, 'age', 50);
console.log(user1); // { id: 5, name: 'max', address: 'ул. Углеродная 5', age: 50 }
addProperty(user1, 'id', -3);
console.log(user1); // { id: -3, name: 'max', address: 'ул. Углеродная 5', age: 50 }

console.log(' ');

const user2 = { id: 90, name: 'stas', address: 0 };
compare(user2, { id: 90 }, 'id');
compare(user2, { id: 90, name: 'alex' }, 'name');
compare({}, {}, 'address');
user2.id = user2.name.length;
compare({ id: 2 + 2, name: 'mikhail' }, user2, 'id');
user2.address = Boolean(1);
compare({ id: 2 + 2, name: 'mikhail', address: 1 }, user2, 'address');
