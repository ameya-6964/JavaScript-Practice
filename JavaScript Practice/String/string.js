/* //! Three Ways To Write a String 
1.) Single Quotes 'Hey'
2.) Double Quotes = "Hey"
3.) Backtick Operator = `Hey` 
*/

const single = 'Hey';
const double = "Hey";
const backtick = `Hey ${2 + 2}`;
console.log(single);
console.log(double);
console.log(backtick);

/* OUTPUT
   * Hey
   * Hey
   * Hey 4
*/

const sum = (a,b) => a + b;
const total = `The Sum is ${sum(2,3)}`;
console.log(total);
console.log(typeof(total));

/* OUTPUT
   * The Sum is 5
   * String
*/

var details = "Hey I'm Ameya Belvalkar And People Call me JSM \"JavaScript Master\"";   //! \ is used as escape Character
console.log(details);
var details = `Hey I'm Ameya Belvalkar And People Call me JSM "JavaScript Master"`; //! BAckticks Provide Better Code Writing
console.log(details);

/* 
*    Hey I'm Ameya Belvalkar And People Call me JSM "JavaScript Master"
*    Hey I'm Ameya Belvalkar And People Call me JSM "JavaScript Master" 
*/
