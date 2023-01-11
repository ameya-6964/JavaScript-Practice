/*                                          
                                              ES6 map Function
   Calls a defined callback function on each element of an array, and returns an array that contains the results.

 */

let numbers = [1, 2, 3, 4, 5, 6];

let b = numbers.map((number) => {
  return number * 2;
});

console.log(b); // [ 2, 4, 6, 8, 10, 12 ]

/*                      
                                             ES6 filter Function
   Returns the elements of an array that meet the condition specified in a callback function.

 */

let c = numbers.filter((number) => {
  return number % 2 == 0;
});

console.log(c); //  [ 2, 4, 6 ]

/*                      
                                             ES6 Reduce Function
   Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

 */

let d = numbers.reduce((value1, value2) => {
  return value1 + value2;
});

console.log(d); //21
