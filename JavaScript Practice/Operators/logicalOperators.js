const a = 10;

const b = 5;

console.log("1st Number : " + a);
console.log("2nd Number : " + b);


let result;

//AND OPERATOR && (Both Operands Must Be True To Return True)

result = a>b && a==b;
console.log(" Is a>b && a==b : " + result);

result = a>b && a>=b;
console.log(" Is a>b && a>=b : " + result);

//OR OPERATOR || (Any One Operands Must Be True To Return True)

result = a>b || a==b;
console.log(" Is a>b || a==b : " + result);

result = a>b && a>=b;
console.log(" Is a>b || a>=b : " + result);

//NOT OPERATOR ! (Inverse The Value Of Output)

result = !true;
console.log(" Value of !true : " + result);

result = !false;
console.log(" Value of !false : " + result);




