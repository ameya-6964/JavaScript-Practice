console.log(age);
let age;

/* OUTPUT 
* Cannot access 'age' before initialization 
*/

// greet("Ameya") //! If Used Before Declaration It Will Throw Error


let greet = (username) => {
    let greeting = `Hey Javascript Master ${username}`
    console.log(greeting);
}
greet("Ameya") //! Will Completly Work Normal 


//! Variable and Function Used With Let And Const Cannot Be Hoisted As They Will Throw Error 
