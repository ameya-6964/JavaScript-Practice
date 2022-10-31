/* 'String’ is a sequence of characters.  String is a data type used to represent text. */

/* In JavaScript, there are 3 types of quotes: 
* 1) Single quotes, 
* 2) Double quotes,  
* 3) Backticks 
*/

// Single Quotes

const singleQuote='Hello World';

console.log("Hey I am String From Single Quote " + singleQuote);

// Double Quotes

const doubleQuote="Hello World";

console.log("Hey I am String From Double Quote " + doubleQuote);

/* Backticks Quotes --> Backticks are “extended functionality” quotes. 
They allow us to embed variables & expressions into a string by wrapping them in ${...} */

const backtickQuotes=`Hello!! $(2+2)`;

console.log("Hey I am String From Backtick " + backtickQuotes);
