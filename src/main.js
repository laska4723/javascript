import { modifyObject, removeProperty } from './objects.js';

modifyObject();

console.log();

const user1 = { id: 1, age: 20, name: 'alex' };
removeProperty(user1, 'id');
console.log(user1);
removeProperty(user1, 'age');
console.log(user1);
removeProperty(user1, 'name');
console.log(user1);
