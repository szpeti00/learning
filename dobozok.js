var numInput = document.querySelector("#input");
var redBox = document.querySelector("#red");
var blueBox= document.querySelector("#blue");
var button = document.querySelector('button');

function inputLength() {
	return input.value.length;
}

function addNumber(){   
  var newP = document.createElement("p");
  var newContent = document.createTextNode(numInput.value);
  newP.appendChild(newContent);
  if (numInput.value % 7 === 0){
    redBox.appendChild(newP);
    redBox.lastChild.scrollIntoView();
  } else {
    blueBox.appendChild(newP);
  }
} 

function isNumber(){
  if (isNaN(numInput.value)){
    alert("Ez nem egy szám");
  } else {
     addNumber();
  }
  numInput.value ="";
}

function buttonClick(){
  if (inputLength() > 0){
    console.log("ajkd");
    isNumber();
  }
}

function enterPress(e) {
  if (e.keyCode === 13 && inputLength() > 0){
    isNumber();
  }
}

button.addEventListener("click", buttonClick);
numInput.addEventListener("keypress", enterPress);
