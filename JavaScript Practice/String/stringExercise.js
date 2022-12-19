const guestList = 'Our guests are: emma, jacob, isabella, ethan';

//! Get a length of the string. Store it in a variable called length.

const length = guestList.length;

console.log(length);

//! Uppercase the entire string. Store the result in a variablle called uppercasedGuestList.

const uppercasedGuestList = guestList.toUpperCase();
console.log(uppercasedGuestList);


//! Check whether 'ETHAN' is on the uppercasedGuestList. Store the answer in a variable called isEthanOnTheList. The data type of the variable must be a boolean.

const isEthanOnTheList = uppercasedGuestList.includes("ETHAN");
console.log(isEthanOnTheList);

//! Create a substring that only contains the following: 'EMMA, JACOB, ISABELLA, ETHAN'. Store the answer in a variable called substringGuests.

const substringGuest = uppercasedGuestList.slice(16);
console.log(substringGuest);

//! Out of the substring you just created, create an array of names of people that are on the list. Store that array in a variable called guests.

const guests = substringGuest.split(', ');

console.log(guests)