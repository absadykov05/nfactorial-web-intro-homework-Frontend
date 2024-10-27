//Task 1
const button = document.getElementById("button");
const text = document.getElementById("text");

button.onclick = () => {
  text.style.visibility = "hidden";
  //   alert(5);
};

//Task 2

/*
button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2);

Output: 
 1
 2

 Why? Because removeEventListener doesn't work without the link to the function of addEventListener. 
 In this case we have anonymous func that doesn't relate to addEventListener.
*/

//Task 3
const remover = document.querySelectorAll(".remove");
const messages = document.querySelectorAll(".message");

remover.forEach((el, ind) => {
  el.onclick = () => {
    messages[ind].style.visibility = "hidden";
  };
});
