/* psuedocode

SINGLE GAME

Randomly pick computer's choice between rock, paper, and scissors
Store in a computerChoice variable
Call getUserChoice and store in a userChoice variable
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

GET USER CHOICE

loop through nodeList "for each?" and assign a variable to whatever isn't null



BEST TILL FIVE GAMES

Create two variables, computerWins and userWins, initialize as 0
LOOP 
Play a game
If computer wins, increment computerWins
If user wins, increment userWins
UNTIL computer or user = 5 */

//singleRound(getComputerChoice(),promptUser());

const rockButt = document.querySelector('.rock');
const paperButt = document.querySelector('.paper');
const scissorButt = document.querySelector('.scissors');

const body = document.querySelector('body');
const div = document.createElement('div');
const player = document.createElement('p');
const playerScore = document.createElement('p');
const computer = document.createElement('p');
const computerScore = document.createElement('p');
const divResults = document.createElement('div');

div.textContent = 'First to 5 wins!';
player.textContent = "Player total" 
computer.textContent = "Computer total";
playerScore.textContent = 0;
computerScore.textContent = 0;

const buttons = document.querySelectorAll('button');
console.log(buttons);


buttons.forEach((button) => {
        button.addEventListener('click', () => singleRound(getComputerChoice(), button.className))
});





/*rockButt.addEventListener('click', () => {singleRound(getComputerChoice(), 'rock');})
paperButt.addEventListener('click', () => {singleRound(getComputerChoice(), 'paper');})
scissorButt.addEventListener('click', () => {singleRound(getComputerChoice(), 'scissors');})*/

body.appendChild(div);
div.appendChild(player);
player.appendChild(playerScore);
computer.appendChild(computerScore);
div.appendChild(computer);
body.appendChild(divResults);




/*function game(){

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
}*/

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
        divResults.textContent = `Computer also chose ${computerChoice}. You tied. Try again.`;
        // keepScore('tie');
       
    } else if (
        (computerChoice === "rock" && userChoice === "scissors") ||
        (computerChoice === "scissors" && userChoice === "paper") ||
        (computerChoice === "paper" && userChoice === "rock") ){

            divResults.textContent = `The computer chose ${computerChoice} so you Lose! ${computerChoice} beats ${userChoice}!`;
            keepScore('computer');
           
        }
        else {
            divResults.textContent = `The computer chose ${computerChoice} so you Win! ${userChoice} beats ${computerChoice}!`;
            keepScore('player');
            
        }
    }

function keepScore(winner){
   
    if(winner == 'player'){
        playerScore.textContent++;
    } 
    else if(winner == 'computer'){
        computerScore.textContent++;
    }

    if(playerScore.textContent == 5){
        divResults.textContent = "You won!";
        divResults.style.fontWeight = 'bold';
    }
    else if(computerScore.textContent == 5){
        divResults.textContent = "Womp womp you lost";
        divResults.style.fontWeight = 'bold';
    }

}


    
