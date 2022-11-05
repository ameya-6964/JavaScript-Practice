/* FALSEY VALUES
* false
* 0
* "" ==> Empty String
* null
* undefined
* Nan
*/

/* TRUTHY VALUES
* Everything Which Is not Falsey
* Empty Object {}
* Empty Array []
*/

const dogs = 5;

if(dogs)
{
    console.log(`You have ${dogs} dogs.`);
}

else
{
  console.log("You Have 0 Dogs");
}