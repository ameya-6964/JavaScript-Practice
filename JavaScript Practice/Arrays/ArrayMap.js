const burger = [
	{ price: 1, name: 'Bread'  }, 
	{ price: 3, name: 'Patties'  },
	{ price: 6, name: 'Cheese'  },
	{ price: 9, name: 'Meat'  },
];

const prices = burger.map((item)=> item.price);
console.log(prices);

const ingridents = burger.map((item)=> item.name);
console.log(ingridents);


//! Difference between Array.map() and Array.forEach() is that the map() method allocates memory in order to store and return values. 
//! While the forEach() method does not allocate memory so it doesn't store any returned values.
