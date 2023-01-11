/*                                                  ES6 Async and Await  
The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains. 
*/

const fs = require("fs/promises");

const readThreeFiles = async (file1, file2, file3) => {
  let a1 = fs.readFile("demo1.txt", "utf-8");
  let a2 = fs.readFile("demo2.txt", "utf-8");
  let a3 = fs.readFile("demo3.txt", "utf-8");
  let c2 = await a2;
  console.log(c2);
  let c1 = await a1;
  console.log(c1);
  let c3 = await a3;
  console.log(c3);
};

readThreeFiles();
console.log("End Of File");

/* OUTPUT
End Of File
Work Hard In Silence Let Your Success Make Noise
Success is Not Final, Failure is Not Fatal, Courage To Continue Counts
Positve Actions Plus Positive Thinking Leads To Success 
*/
