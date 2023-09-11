// Get/Change/set Content Inside Element
//! document.getElementbyId

// let form = document.getElementById("item-form");
// console.log(form);

//!OUTPUT
{
  /* <form id="item-form">
  <div class="form-control">
    <input
      type="text"
      class="form-input"
      id="item-input"
      name="item"
      placeholder="Enter Item"
    />
  </div>
  <div class="form-control">
    <button type="submit" class="btn">
      <i class="fa-solid fa-plus"></i> Add Item
    </button>
  </div>
</form>; */
}
// let title = document.getElementById("app-title");
// console.log(title.textContent); // Shopping List

// title.textContent = "Hello World";
// console.log(title.textContent); // Shopping List Will be Set To hello World

// title.innerHTML = "<strong>Shopping List</strong>";

// // Chnage Styles
// title.style.color = "red";
// title.style.backgroundColor = "black";
// title.style.padding = "10px";
// title.style.borderRadius = "10px";

// Other Selectors
let title = document.querySelector("#app-title");
let heading = document.querySelector("h1");
let input = document.querySelector("input[type='text']");
let listItem = document.querySelector("li:nth-child(4)");
console.log(heading);
console.log(title);
console.log(input);
console.log(listItem.innerText);
