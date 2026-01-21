import chalk from 'chalk';

export const modifyObject = () => {
  const user = {
    name: 'John',
    age: 25,
  };

  user.city = 'Moscow';

  user['favorite-color'] = 'blue';

  delete user.city;
  delete user['favorite-color'];

  user.address = {
    street: 'Arbat Street',
    house: 10,
  };

  user.address.apartment = 58;

  user.address.house = 13;

  const key = 'email';
  const value = 'john@mail.com';
  user[key] = value;

  const name = 'James';
  const age = 28;
  const city = 'Moscow';
  const newUser = { name, age, city };

  console.log(user);
  console.log();
  console.log(newUser);
};

export const removeProperty = (object, property) => {
  delete object[property];

  return object;
};

export const addProperty = (object, property, value) => {
  object[property] = value;

  return object;
};

export const compare = (object1, object2, property) => {
  if (object1[property] === object2[property]) {
    console.log(
      `\x1b[32mУ обоих объектов по ключу "${property}" лежит одинаковое значение - ${object1[property]}\x1b[0m`,
    );
  } else {
    console.log(
      `\x1b[31mУ объектов по ключу "${property}" разные значения. У первого - ${object1[property]}, а у второго - ${object2[property]}\x1b[0m`,
    );
  }
};
