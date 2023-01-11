/* JavaScript is Asynchronous In Nature. Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.
 */
console.log("JavaScript Is Used In Front-End Web Development 💻");

setTimeout(() => {
  console.log("JavaScript Is Easy To Learn ❤️");
}, 1000);

console.log("JavaScript Is Used In Back-End Web Development 💻");

/* 
Expected Output As Per Other Programing Languages

JavaScript Is Used In Front-End Web Development 💻
JavaScript Is Easy To Learn ❤️
JavaScript Is Used In Back-End Web Development 💻
*/

/*
Actual Output

JavaScript Is Used In Front-End Web Development 💻
JavaScript Is Used In Back-End Web Development 💻
JavaScript Is Easy To Learn ❤️ 
*/
