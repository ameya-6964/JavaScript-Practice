let heading = document.querySelector("h1");
//Fetching JSON File
fetch("./movie.json")
  .then((res) => {
    //console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });

// Fetching Text File

fetch("./test.txt")
  .then((res) => {
    //console.log(res);
    return res.text();
  })
  .then((data) => {
    console.log(data);
  });

//Fetching From API
fetch("https://api.github.com/users/ameya-6964")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    heading.innerText = data.login;
  });
