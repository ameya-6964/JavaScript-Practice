const average = (a, b, c) => {
  return a + b + c / 3;
};

const average1 = average(1, 2, 3);
const average2 = average(2, 3, 5);
const average3 = average(6, 7, 223);

console.log(average1); // 4
console.log(average2); //6.66
console.log(average3); //87.333

const getSquare = (number) => number * number; // FUNCTION EXPRESSION

const getSquare1 = getSquare(5);

console.log(getSquare1); //25
