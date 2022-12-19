const exampleString = 'hotdog';

const hot = exampleString.slice(0,3) //hot
const dog = exampleString.slice(3,6) // dog

console.log(hot);
console.log(dog);


const sentence ="The quick brown fox jumps over the lazy dog.";

const sepratedCharacters = sentence.split('');

console.log(sepratedCharacters);

/* 
* OUTPUT
[
  'T', 'h', 'e', ' ', 'q', 'u', 'i',
  'c', 'k', ' ', 'b', 'r', 'o', 'w',
  'n', ' ', 'f', 'o', 'x', ' ', 'j',
  'u', 'm', 'p', 's', ' ', 'o', 'v',
  'e', 'r', ' ', 't', 'h', 'e', ' ',
  'l', 'a', 'z', 'y', ' ', 'd', 'o',
  'g', '.'
]
*/


const sepratedWords = sentence.split(' ');

console.log(sepratedWords);

/*  
  * OUTPUT
[
  'The',   'quick',
  'brown', 'fox',
  'jumps', 'over',
  'the',   'lazy',
  'dog.'
]

*/
