//1
document.getElementById('container');


//2
document.querySelector('#container');

//3
document.querySelectorAll('.second');

//4
document.querySelector('ol .third');

//5
let text = document.querySelector("#container");

text.innerText = "Hello";

//6
let newClass = document.querySelector(".footer");

newClass.classList.add("main");


//7 
newClass.classList.remove("main");

//8
let newLi = document.createElement("li");

//9
newLi.innerText("four");

//10

let uL = document.querySelector("ul");

uL.appendChild(newLi);

//11
let listLoop = document.querySelectorAll("ol li");

for (let i = 0 ; i < listLoop.length; i++){
    listLoop[i].style.backgroundColor = "green";
}

//12
let foot = document.querySelector(".footer");
foot.remove();
