/* psuedocode

SINGLE GAME

Randomly pick computer's choice between rock, paper, and scissors
Store in a computerChoice variable
Prompt the user to type rock paper scissors
Store in a userChoice variable
    Treat as case-insensitive
Compare computerChoice to userChoice
    If computerChoice is Rock and userChoice is Scissors, Computer wins
    If computerChoice is Paper and userChoice is Rock, Computer wins
    If computerChoice is Scissors and userChoice is Paper, Computer wins
        Print "You Lose! computerchoice beats userChoice!"
    If computerChoice is the same as userChoice, restart game
        Pick a new choice for computer
        Prompt user again
    Else User wins 
        (computerChoice is Rock and userchoice is Paper
            computerChoice is Paper and userChoice is Scissors
            computerChoice is Scissors and userChoice is Rock)
        Print "You Win! userChoice beats computerChoice!"

Return the winner




FIVE GAMES

Create two variables, computerWins and userWins, initialize as 0
LOOP 
Play a game
If computer wins, increment computerWins
If user wins, increment userWins
UNTIL Game has been played 5 times */


game();


function promptUser(){
    let badAnswer=true;
    let userChoice; 
    while(badAnswer){
        userChoice = prompt("Enter your choice (rock, paper or scissors).","");
        userChoice = userChoice.toLowerCase();
        badAnswer=false;
        if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors"){
            badAnswer=true;
            alert("Uhhh, enter rock, paper or scissors plz");
            console.log("bad answer");
        }
    }
    return userChoice;
}

function game(){

    let computerWins = 0;
    let userWins = 0;
    let finalWinner;

    for(let i=0; i<5; i++){
        let userChoice = promptUser();
        let winner = singleRound(getComputerChoice(),userChoice);
        console.log(`Round ${i} winner is ${winner}`);
        if(winner === "computer"){
            computerWins++;
        } else if(winner === "user"){
            userWins++;
        } else if (winner === "tie"){
            i--;
        }
    }

    if (computerWins > userWins) {
        finalWinner = "the computer. Womp Womp.";
    } else {
        finalWinner = "you! Congrats!";
    }

    alert(`The winner is ${finalWinner}`);
}


function getComputerChoice(){


    let choice = Math.random()*100;
    let computerChoice;

    if (choice <= 33) {
        computerChoice = "rock";
    } else if (choice <=66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log(computerChoice);
    return computerChoice;
}


function singleRound(computerChoice, userChoice){
    if (computerChoice === userChoice){
        alert(`Computer also chose ${computerchoice}. You tied. Try again.`);
        return "tie";
    } else if (
        (computerChoice === "rock" && userChoice === "scissors") ||
        (computerChoice === "scissors" && userChoice === "paper") ||
        (computerChoice === "paper" && userChoice === "rock") ){

            alert(`The computer chose ${computerChoice} so you Lose! ${computerChoice} beats ${userChoice}!`);
            return "computer";
        }
        else {
            alert(`The computer chose ${computerChoice} so you Win! ${userChoice} beats ${computerChoice}!`);
            return "user";
        }
    }

    
