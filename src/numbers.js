export const generateInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getSquareArea = (side) => {
  return side * side;
};

export const getCircleArea = (radius) => {
  const area = Math.PI * radius ** 2;

  return Number(area.toFixed(2));
};
