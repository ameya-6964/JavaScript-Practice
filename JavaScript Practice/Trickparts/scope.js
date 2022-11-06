// Global Scope :- Can Be Accesed From Any Block In This File.
const name = "Ameya";


// Accesing Global Variable Inside Block
const logName = () => {
  console.log(name); 
};

logName();

/* OUTPUT
* Ameya
*/

// Local Scope

const someFunction = () => {
    const age = 21; // Local Scope 
    console.log(age);
}

someFunction();
/* OUTPUT
* 21
*/


// Accesing Local Variable Outside Function Is Not Allowed So Following Line Will Give Error
// console.log(age);

/* OUTPUT
* Uncaught ReferenceError: age is not defined
*/


const genderFunction = () => {
  const gender = "male";
//  console.log(firstName); // Cannot Access Variable From anotherGenderFunction
  
const anotherGenderFunction = () => {
const firstName = "Ameya";
console.log(gender) // Inner Function Can Access Variable From Outer Function(genderFunction)

} 
anotherGenderFunction();
}

genderFunction();



