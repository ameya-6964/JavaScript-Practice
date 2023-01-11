/*                                ES6 Array Or Object Destructuring
Destructuring is an efficient way to extract multiple values from data that is stored in arrays or objects.
When destructuring an array, we use their positions (or index) in an assignment. 
*/

/* Array Destructuring */

let colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange"];

// destructuring assignment
let [color1, color2, color3] = colors;

console.log(color1); // Violet
console.log(color2); // Indigo
console.log(color3); // Blue

let [, , , color4, color5, color6] = colors; // Leave space for unpick elements (Violet,Indigo,Blue Will Be Skipped)
console.log(color4); // Green
console.log(color5); // Yellow
console.log(color6); // Orange

/* Object Destructuring */

let obj1 = {
  Name: "Ameya Belvalkar",
  Position: "Full Stack Developer",
  FavLang: "Java",
};

/* Previously Used Syntax

let Name = obj1.Name;
let Position = obj1.Position;
let FavLang = obj1.FavLang;

*/

// ES6 Syntax

let { Name, Position, FavLang } = obj1;

console.log(Name);
console.log(Position);
console.log(FavLang);

/* OUTPUT 
Ameya Belvalkar
Full Stack Developer
Java
*/
