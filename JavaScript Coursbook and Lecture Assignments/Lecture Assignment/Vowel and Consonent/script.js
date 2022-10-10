
function vowel(){
    var char = document.getElementById("char").value;   // Input From The User
    var res =  document.getElementById("result").value= "";
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
        document.getElementById('output').innerHTML += "<p style='font-size: 20px;'> " +  (i + 1)  + " : " + alphabet +  " is a Vowel<br>" +  "</p>" ;
      }
    }
    res.value= vowel;
  }
  

