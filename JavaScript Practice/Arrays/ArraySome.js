const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const numbers1 = [4, 5, 6, 7, 5, 6, 7, 8];
const numbers2 = [1, 2, 1, 2, 1, 2, 1, 2];

const greaterThenThree = (number) => {
  return number > 3;
};
const smallerThenThree = (number) => {
  return number < 3;
};

console.log(numbers.some(greaterThenThree)); //true
console.log(numbers.some(smallerThenThree)); //true
console.log(numbers1.every(greaterThenThree)); //true
console.log(numbers2.every(smallerThenThree)); //true
