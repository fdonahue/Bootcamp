document.addEventListener("DOMContentLoaded", function(){

let inputForm = document.getElementById("inputForm");
let image = document.getElementsByTagName("img");
let memeList = document.getElementById("memeList");
const button = document.querySelector("button");
const imageURL = document.querySelector('imageURL');
const topText = document.querySelector('topText');
const bottomText = document.querySelector('bottomText');


inputForm.addEventListener("submit", function (e){

    e.preventDefault();

    const newMeme = document.createElement("div");
    const topText= document.createElement("div");
    const bottomText = document.createElement("div");
    const image = document.createElement("img");


    //create delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";


    image.src = document.getElementById("imageURL").value;
    
    topText.classList.add("topText");
    topText.innerHTML = document.getElementById("topText").value;

    bottomText.classList.add("bottomText");
    bottomText.innerHTML = document.getElementById("bottomText").value;


    newMeme.classList.add("newMeme");
    newMeme.append(topText);
    newMeme.append(bottomText);
    newMeme.append(image);
    let memeLocation = document.getElementById("memeLocation");
    memeLocation.append(newMeme);

    // add delete button to meme
    newMeme.appendChild(deleteButton);



//on click delete meme
newMeme.addEventListener("click", function(e) {

    const targetName = e.target.tagName;

    if (targetName === "BUTTON"){

        e.target.parentNode.remove();
    };



})







inputForm.reset()    

})









})