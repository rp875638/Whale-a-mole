const squares = document.getElementsByClassName("square");
const scoreBoard = document.getElementById("score");
const timer = document.getElementById("time-left");


function randomDiv() {
return Math.round(Math.random() * 8);
}
let time = 15;
let lastNum = -1;
let intervalId = null;
let intervalTimeout = null;
function startGame() {
    resetScoreBoard();
    intervalId = setInterval(() => {
        if (lastNum != -1) {
        squares[lastNum].removeEventListener("click", clickHandler);
        squares[lastNum].classList.remove("mole");
        }
        
        const num = randomDiv();
        console.log(num);
        squares[num].addEventListener("click", clickHandler);
        squares[num].classList.add("mole");
        lastNum = num;
        
        timer.innerText = Number(timer.innerText) - 1;
    }, 1000);

    intervalTimeout = setTimeout(resetGame, time * 1000);
}

function resetScoreBoard(){
    scoreBoard.innerHTML = 0;
    timer.innerHTML = 15;
    resetGame();
}

function resetGame() {
    if(intervalId)
        clearInterval(intervalId);
    if(intervalTimeout){
        clearTimeout(intervalTimeout);
    }
    if (lastNum != -1) {
    squares[lastNum].removeEventListener("click", clickHandler);
    squares[lastNum].classList.remove("mole");
    }
    
}

function clickHandler() {
scoreBoard.innerHTML = Number(scoreBoard.innerHTML) + 1;
}