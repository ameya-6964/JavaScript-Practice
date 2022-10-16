                                    // CONDITIONS AND OPERATORS

let a = 10;
let b = 20;
  if(a > b)
  {
    console.log("A is Greater Then B");
  }
  else{
    console.log("B is Greater Then A");
  }                                  

  /*   OUTPUT 
  B is Greater Then A
  */


  let c = 20; // Number
  let d = "20"; //String
  if(d == b)
  {
    console.log("C and D are Equal");
  }
  else
  {
    console.log("C and D are Not Equal");
  }     

   /*   OUTPUT 
      C and D are Equal (This is Because == Operator Does Not Check For Datatype To Avoid This Use ===)
  */
 
      let e = 20; // Number
      let f = "20"; //String
      if(f === e) // === operator Means Equal Value and Equal Type
      {
        console.log("They Are Same");
      }
      else
      {
        console.log("E and F are Not Equal");
      } 

