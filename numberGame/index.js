const form = document.querySelector(".numForm")
const range = document.querySelector(".rangeInput")
const inputNum = form.querySelector(".inputNum")
const maxNum = document.querySelector(".maxNum")
const youChose = document.querySelector(".youChose")
const gameResult = document.querySelector(".gameResult");

function result(myNum, randNum){
youChose.innerText=`You chose: ${myNum}, the machine chose ${randNum}`;
myNum = parseInt(myNum);
if (myNum === randNum){ 
    gameResult.innerText=`You won!`;
    gameResult.style.color = "yellowgreen";
}
else{
    gameResult.innerText=`You lose!`;
}
}

function makeRandNum(e){
e.preventDefault();
const myNum = inputNum.value;
const maxValue = range.value;
const randNum = Math.floor(Math.random() * maxValue);

result(myNum, randNum);
}

function handleInput(){
const maxNumValue = range.value;

maxNum.innerText = `${maxNumValue}`;
form.addEventListener("submit", makeRandNum);
}

function init(){
range.oninput = handleInput;
}
init();