const fs = require("fs");

fs.readFile("demo.txt", "utf-8", (err, data) => {
  console.log(data);
});

console.log("This is End Of My File");

/* OUTPUT
This is End Of My File
“When you change your thoughts, remember to also change your world.”—Norman Vincent Peale
*/
