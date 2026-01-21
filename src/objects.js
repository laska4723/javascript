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
