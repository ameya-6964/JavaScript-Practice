// Create a Function Which Print Square Of The Numbers

// Step 1 Declaration
function square(number)
{
    return number*number;
}

//Step 2 Calling

const result = square(5);

console.log(result);

//Output 25

//Function Expression

function sayHi(name)
{
    console.log(`Hiii ${name} Welcome To World Of Javascript`);
}

sayHi("Ameya");
sayHi("Jayesh")


// Return Statement 

function add (a, b) {
    return a + b;
 }

 const sum = add(2, 2);

 console.log(sum); // 4


 // Some Fun Wuth Return Statement

 function test(){
     console.log("testing Test Method") // Will Be Exectued  
    return true; // Will Be Exectued 
    console.log("testing Test Method Completed")  // Will Not Be Exectued 
    return false; // Will Be Exectued 
  }
  
  const bool = test()
  console.log(bool);

  








