let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let highScore = 0;
let displayhighscore = document.getElementById("high-score");
let h2 = document.querySelector('h2');

document.addEventListener('keypress', function(){
    if(started == false){
        console.log('game started')
        started = true;
        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("g-flash");
    setTimeout(function(){
        btn.classList.remove("g-flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("u-flash");
    setTimeout(function(){
        btn.classList.remove("u-flash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let  randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
    
}

function checkAns(idx){
     
    if (userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,800);
        }
        
    }else{
        updateHighScore();
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"; 
        },150);
        reset();
    }
}

function updateHighScore(){
    if(level > highScore){
        highScore = level;
        displayhighscore.innerText = highScore;
        console.log(highScore);
    }
    
};
function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);


}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


