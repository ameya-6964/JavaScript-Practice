const init = (username) => {
    const hobby = `Learning JavaScript Clousers from ${username}`; // hobby is a local variable created by init
  
    const displayHobby = () => { // displayHobby() is the inner function, a closure
      console.log(hobby); // using variable declared in the parent function
    }
  
    return displayHobby;
  }
  
  var myFunc = init("Ameya");
  
  myFunc();