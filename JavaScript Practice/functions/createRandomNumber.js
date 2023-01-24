// Create a Function which will generate random number between 1 - 10

let randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let random1 = randomNumber(10, 100);

console.log(random1); // returns a random number between 10 and 100
