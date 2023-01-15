const Names = ["Ameya", "Jayesh", "Aakash", "Tushar", "Tooshar", "Gaurav"];

Names.sort();

console.log(Names);

/* [ 'Aakash', 'Ameya', 'Gaurav', 'Jayesh', 'Tooshar', 'Tushar' ] 
! It Mutates (Changes) Original Array
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55];
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55];
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55];

numbers.sort();

console.log(numbers);

/* //!  OUTPUT 
[
    1, 11, 2, 22, 3, 33,
    4, 44, 5, 55, 6,  7,
    8,  9
]
Do note that this method only works for strings, not numbers as it receives them as their character values instead. Due to this, a smaller number may end up appearing last on a list you're trying to sort.
*/

//! For Ascending Order

numbers1.sort((a, b) => {
  return a - b;
});
console.log(numbers1);

//! For Descending Order
numbers2.sort((a, b) => {
  return b - a;
});
console.log(numbers2);
