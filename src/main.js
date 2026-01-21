import { modifyObject, removeProperty, addProperty } from './objects.js';

modifyObject();

console.log();

const user1 = { id: 1, age: 20, name: 'alex' };
removeProperty(user1, 'id');
console.log(user1); // { age: 20, name: 'alex' }
removeProperty(user1, 'age');
console.log(user1); // { name: 'alex' }
removeProperty(user1, 'name');
console.log(user1); // {}

console.log(' ');

const user = { id: 5, name: 'max' };
addProperty(user, 'address', 'ул. Углеродная 5');
console.log(user); // { id: 5, name: 'max', address: 'ул. Углеродная 5' }
addProperty(user, 'age', 50);
console.log(user); // { id: 5, name: 'max', address: 'ул. Углеродная 5', age: 50 }
addProperty(user, 'id', -3);
console.log(user); // { id: -3, name: 'max', address: 'ул. Углеродная 5', age: 50 }
