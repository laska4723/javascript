export const generateInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
