
function vowel(){
    var char = document.getElementById("char").value;   // Input From The User
    

 if
 (char === 'a' ||  char === 'e' || char === 'i' || char === 'o' || char === 'u' 
 || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U')
 {
  for(i=0;i<=4;i++)
  {
    document.write( char + " is a vowel") ;
    document.write("<br />");
  }
 }
 else
 {
    for(i=0;i<=9;i++)
    {
      document.write( char + " It is a Consonent");
      document.write("<br />");
    }
 }
}
