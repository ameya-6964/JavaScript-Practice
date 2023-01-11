/*                                               ES6 Promise In JavaScript
Promises are a new feature in the ES6 JavaScript that allow you to very easily deal with asynchronous code without resolving to multiple levels of callback functions
*/
const fs = require("fs/promises");

let a = fs.readFile("demo.txt", "utf-8");
a.then((data) => {
  console.log(data);
});

console.log("End Of File");

/* OUTPUT 
End Of File
“When you change your thoughts, remember to also change your world.”—Norman Vincent Peale 
*/
