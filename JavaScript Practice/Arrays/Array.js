// Some Array Introduction :)

const values = ['Apple','Banana','Mango','Grapes','Watermelon'];

console.log(values.length);

/* OUTPUT
* 5
*/

values[5] = "Papaya";
console.log(values[5]);

/* OUTPUT
* Papaya
*/

for(let i = 0; i < values.length;i++)
{
    console.log(values[i]);
}


/* OUTPUT 
* Apple
* Banana
* Mango
* Grapes
* Watermelon
 */
