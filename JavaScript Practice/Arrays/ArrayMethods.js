const names = [ 'Jon', 'Bob', 'David', 'Mark' ];
console.log(`Before Opertions = [${names}]`);

// Array Push - Adds a new value to the end of the array.
names.push('Dean');
console.log(`After Push Opertion = [${names}]`);

//! Dean Will Be Added To Last Index

// Array Pop - Deletes the last element of an array
names.pop();
console.log(`After Pop Opertion = [${names}]`);

//! Dean Will Be Removed From Last Index


// Array Shift - Deletes the first element of an array
names.shift();
console.log(`After Shift Opertion = [${names}]`);

//! Jon Will Be Removed From First Index

// Array Unshift - Adds a new value to the start of an array
names.unshift('Dean');
console.log(`After Unshift Opertion = [${names}]`);

//! Dean Will Be Added To First Index


// Array Splice - It adds/removes values from any position of an array
names.splice(2, 2 , "Jenny","JonnyBoy");
console.log(`After Splice Opertion = [${names}]`);

//!  David And Mark Will Be Removed And Replaced By Jenny And JennyBoy


// Array Slice - Copies certain parts of an array into a newely created array
const noOneLikesJon = names.slice(1);
console.log(`After Slice Opertion = [${noOneLikesJon}]`);

//! Dean Will Be Removed And Everything Rest Will Be Copied To Variable
