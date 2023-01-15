const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const value = numbers.find((number) => number > 5);

console.log(value);

// second example
const states = ["Alaska", "California", "Colorado", "Hawaii"];

const state = states.find((state) => state.startsWith("C"));

console.log(state);
