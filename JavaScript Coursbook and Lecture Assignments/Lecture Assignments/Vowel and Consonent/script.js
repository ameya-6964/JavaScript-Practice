
function vowel(){
    var char = document.getElementById("char").value;   // Input From The User
    
    if
    (char === 'a' ||  char === 'e' || char === 'i' || char === 'o' || char === 'u' 
    || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U')
    {
      
        document.getElementById("output").innerHTML= char +" :" + " Is Vowel " + "\n" 
        + char +" :" + " Is Vowel " + "\n"
        + char +" :" + " Is Vowel " + "\n"
        + char +" :" + " Is Vowel " + "\n"
        + char +" :" + " Is Vowel " + "\n"

    
    }
    else
    {
      document.getElementById("output").innerHTML= 
      char +" :" + " Is Consonent " + "\n" 
      + char +" :" + " Is Consonent " + "\n"
      + char +" :" + " Is Consonent " + "\n"
      + char +" :" + " Is Consonent " + "\n"
      + char +" :" + " Is Consonent " + "\n"+
      char +" :" + " Is Consonent " + "\n" 
        + char +" :" + " Is Consonent " + "\n"
        + char +" :" + " Is Consonent " + "\n"
        + char +" :" + " Is Consonent " + "\n"
        + char +" :" + " Is Consonent " + "\n"
    }   
  }
  

/* else{
    var preview="You Have Entered Following Details Please Verify Before Submitting : \n" + 
    "Full Name : " + name + "\n"+ 
    "Email ID : " + email +  "\n"+
    "Mobile Number : " + mobile +  "\n"+ 
    "Country : " + country +  "\n"+
    "Gender : " + gender +  "\n";
    if(hobbies.length){
        preview += "Hobbies : " + hobbies.join(", ");
    } 

    alert(preview);
}
}; */