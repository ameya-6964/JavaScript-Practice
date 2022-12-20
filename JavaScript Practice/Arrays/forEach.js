let names = [ 'Jon', 'Jenny', 'Johnny' ];

/* NORMAL FOR LOOP */

for (let i = 0; i < names.length; i++) {
	console.log( names[i],i);
}

// Jon 0
// Jenny 1
// Johnny 2

/* FOR EACH LOOP */

names.forEach((name,i) => {
    console.log(name,i);
})

// Jon 0
// Jenny 1
// Johnny 2

/* SIMPLE Way */

const logTheNamesAndIndex = (name,i) => {
    console.log(name,i);
}

names.forEach(logTheNamesAndIndex);

// Jon 0
// Jenny 1
// Johnny 2

/* Usecase Of ForEach Loop */

const numbers = [1,4,5,6,7,8,3,1,123,4];
let sum = 0;

numbers.forEach((number) =>{
    sum = sum + number;
})
console.log(sum);