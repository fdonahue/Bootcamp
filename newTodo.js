document.addEventListener("DOMContentLoaded",function(){

let newList = document.getElementById("newList");
let todoForm = document.getElementById("todoForm");


  //create list elements upon submitting form
todoForm.addEventListener("submit", function(e) {
//prevent page reload when submtting form
e.preventDefault();

//create delete button
let deleteButton = document.createElement("button");
deleteButton.innerText = "Delete";

//create todo item with value of input
let newTodo = document.createElement("li");
newTodo.innerText = document.getElementById("todoInput").value;

//add item + delete button when submitted
newList.appendChild(newTodo);
newTodo.appendChild(deleteButton);

todoForm.reset();

});

//on click delete or line through item
newList.addEventListener("click", function(e) {

    const targetName = e.target.tagName;

    if(targetName === "LI"){
        e.target.style.textDecoration = "line-through";
    }else if (targetName === "BUTTON"){

        e.target.parentNode.remove();
    };



})



});