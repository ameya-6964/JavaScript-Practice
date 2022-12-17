console.log(age);
var age = 5;

// * OUTPUT : - undefined

/* Working Of Hoisting For Above Code
* var age;
* console.log(age);
* age=5;
*/

hoist("Ameya");
function hoist(username)
{
    var greet = `Hey Javascript Master ${username}`
    console.log(greet);
}

// * OUTPUT : - Hey Javascript Master Ameya


/*  
* Working Of Hoisting For Above Code
 function hoist(username)
{
    var greet = `Hey Javascript Master ${username}`
    console.log(greet);
} 
hoist("Ameya");

*/