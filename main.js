console.log('Privet, Mir!');

//define a function computerPlay()
//create variables 'Rock', 'Paper', 'Scissors'
//return a random value
//create variable with random int
//based on its result, return one of the variables above

const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

const playerChoice = promptInput();
const computerChoice = computerPlay();

let countPlayer = 0;
let countComputer = 0;

function computerPlay() {
    let result = '';
    let num = Math.floor(Math.random()*3);
    switch (num) {
        case 0:
            result += rock;
            break;
        case 1:
            result += paper;
            break;
        case 2:
            result += scissors;
            break;
    }
    return result;
}

function promptInput() {
    let data = prompt('Enter either "Rock", "Paper" or "Scissor":');
    return data;
};

//define a function playRound() with two args: playerChoice, computerChoice
//playerSelection needs to be case-insensetive
//return a string that declares the winner, use template literals
//define variables for user input and computer input

//define function game()
//use playRound() inside than funcnion
//use loop to make a five iterations and keep score in a variable
//use console.log() to display results of each round

function game() {
    return playRound(playerChoice, computerChoice);
}

function playRound(playerChoice, computerChoice) {

    switch (true) {
        case playerChoice.toUpperCase() === paper.toUpperCase() && computerChoice === rock:
            countPlayer += 1;
            return `You win! ${paper} beats ${rock}!`;
        
        case playerChoice.toUpperCase() === paper.toUpperCase() && computerChoice === scissors:
            countComputer += 1;
            return `You lose! ${scissors} beats ${paper}!`;
        
        case playerChoice.toUpperCase() === scissors.toUpperCase() && computerChoice === paper:
            countPlayer += 1;
            return `You win! ${scissors} beats ${paper}`;
        
        case playerChoice.toUpperCase() === scissors.toUpperCase() && computerChoice === rock:
            countComputer += 1;
            return `You lose! ${rock} beats ${scissors}`;
        
        case playerChoice.toUpperCase() === rock.toUpperCase() && computerChoice === scissors:
            countPlayer += 1;
            return `You win! ${rock} beats ${scissors}`;
        
        case playerChoice.toUpperCase() === rock.toUpperCase() && computerChoice === paper:
            countComputer += 1
            return `You lose! ${paper} beats ${rock}`;

        case playerChoice.toUpperCase() === computerChoice.toUpperCase():
            return 'It\'s a toe.';
    }
}

console.log(game());