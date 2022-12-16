//Square Function With Help Of Arrow Functions 

// 1 Way  //! With Return Keyword
const square = (number) => {
    return number * number
};

const result = square(10);
console.log(result);

// 2 Way //! Without Return Keyword because Parameter Is Only number 

const square1 = (number) => number * number;

const result1 = square1(10);

console.log(result1);


const sum = (a, b) => {
    return a + b;
}

const sumResult = sum(10, 20);

console.log(sumResult);


const greeting = (UserName) =>{
    return `Hello ${UserName}`
}

var temp = greeting("Ameya");

console.log(temp);
