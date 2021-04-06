let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choice = ['r','p','s'];
    const random = Math.floor(Math.random()*3);
   return choice[random];
}

function converToWord(letter){
    if(letter=="r")
    return "Rock";
    else if(letter=="p")
    return "Paper";
    return "Scissors";
}
function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML= userScore;
    const smallwordUser = "user".fontsize(3).sub();
    const smallwordComp = "comp".fontsize(3).sub();
    result_p.innerHTML= `${converToWord(userChoice)}${smallwordUser}  beats  ${converToWord(computerChoice)}${smallwordComp} You Win !! :D `
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},300);

    
}
function lose(userChoice,computerChoice){
    computerScore++;
    computerScore_span.innerHTML= computerScore;
    const smallwordUser = "user".fontsize(3).sub();
    const smallwordComp = "comp".fontsize(3).sub();
    result_p.innerHTML= `${converToWord(userChoice)}${smallwordUser}  beats  ${converToWord(computerChoice)}${smallwordComp} You Lose   :O `
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},500);

}
function draw(userChoice,computerChoice){
    const smallwordUser = "user".fontsize(3).sub();
    const smallwordComp = "comp".fontsize(3).sub();
    result_p.innerHTML= `${converToWord(userChoice)}${smallwordUser}  equals  ${converToWord(computerChoice)}${smallwordComp} Draw! xD `
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')},500);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
        win(userChoice,computerChoice);
    break;
    case "rp":
    case "ps":
    case "sr":
        lose(userChoice,computerChoice);
    break;
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice,computerChoice);
    break;
    

    }
}
function main(){

rock_div.addEventListener('click',function() {
    game("r");
})
paper_div.addEventListener('click',function() {
    game("p");
})
scissors_div.addEventListener('click',function() {
    game("s");
}) 
}
main();