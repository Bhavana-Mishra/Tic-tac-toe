console.log("Welcome to Tic tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;
const curColour = document.body.style.backgroundColor;
music.play();


//Function to chage the turn 

//music.volume=0.25;

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}


//function to  check for  Win
const checkWin = () => {
    let box=document.getElementsByClassName('box');
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];
    wins.forEach(e => {
        //alert(e[1])
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {

            gameOver.volume=1;
            gameOver.play();
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "  Won";
             box[e[0]].style.backgroundColor= "#0616f7";
              box[e[1]].style.backgroundColor = "#0616f7";
             box[e[2]].style.backgroundColor = "#0616f7";

            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "160px"
        }
        
    })

}

//Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            audioTurn.play();
            turn = changeTurn();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//Add onclick listen on reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    let box = document.querySelectorAll('.box');
    Array.from(box).forEach(e=>{
        e.style.backgroundColor="#7ee243";
        e.addEventListener('mouseover',function()
        {
            e.style.color="black";
            //e.style.hover="pink"
        })
       // e.appendChild()
    });
    turn = "X";
    isgameover = false;

    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  
})