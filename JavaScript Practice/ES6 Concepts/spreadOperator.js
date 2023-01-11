/* ES6 provides a new operator called spread operator that consists of three dots (...). 
The spread operator allows you to spread out elements of an iterable object such as an array */

let happyEmojis = ["😄","😁","😆"];

let heartEmojis = ["🧡","❤️","💙"];

let allEmojis =[...happyEmojis,...heartEmojis];

console.log(allEmojis);

/* OUTPUT - [ '😄', '😁', '😆', '🧡', '❤️', '💙' ]  */

let allEmoji =[...heartEmojis,...happyEmojis];

console.log(allEmoji);

/* OUTPUT -  [ '🧡', '❤️', '💙', '😄', '😁', '😆' ] */

const odd = [1,3,5]

const even = [2,4,6]

const combined =[...odd,...even]

console.log(combined);

/* OUTPUT - [ 1, 3, 5, 2, 4, 6 ] */


const sum = (a,b,c) =>{
  return a+b+c
}

let a = sum(...odd); // 1+3+5 = 9
let b = sum(...even); // 2+4+6 = 12
let c = sum(...combined); // 1+3+5 = 9

console.log(a); 
console.log(b);
console.log(c);

/* OUTPUT
   a =  9
   b = 12
   c =  9 
*/