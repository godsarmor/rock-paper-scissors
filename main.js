console.log('Privet, Mir!');

//define a function computerPlay()
//create variables 'Rock', 'Paper', 'Scissors'
//return a random value
//create variable with random int => based on its result, return one of the variables above

const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

function computerPlay() {
    let result = '';
//generate int from 0 to 2
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

//define a function playRound with two args: playerChoice, computerChoice
//playerSelection needs to be case-insensetive
//return a string that declares the winner, use template literals
//define variables for user input and computer input

const playerChoice = 'ROcK';
const computerChoice = computerPlay();

function playRound(playerChoice, computerChoice) {
    let a = `${paper} beats ${rock}.`;
    let b = `${rock} beats ${scissors}.`;
    let c = `${scissors} beats ${paper}.`;

    switch (true) {
        case playerChoice.toUpperCase() === rock.toUpperCase() && computerChoice === scissors:
            return `You win! ` + b;
            break;
        case playerChoice.toUpperCase() === rock.toUpperCase() && computerChoice === paper:
            return `You lose. ` + a;
            break;
        case playerChoice.toUpperCase() === rock.toUpperCase() && computerChoice === rock:
            return 'It\'s a draw.';
            break;
        case playerChoice.toUpperCase() === paper.toUpperCase() && computerChoice === rock:
            return `You win! ` + a;
            break;
        case playerChoice.toUpperCase() === paper.toUpperCase() && computerChoice == scissors:
            return `You lose. ` + c;
            break;
        case playerChoice.toUpperCase() === paper.toUpperCase() && computerChoice == paper:
            return 'It\'s a draw.';
            break;
        case playerChoice.toUpperCase() === scissors.toUpperCase() && computerChoice === paper:
            return `You win! ` + c;
            break;
        case playerChoice.toUpperCase() === scissors.toUpperCase() && computerChoice === rock:
            return `You lose. ` + b;
            break;
        case playerChoice.toUpperCase() === scissors.toUpperCase() && computerChoice === scissors:
            return 'In\'s a draw.';
            break;
        default:
            return 'Invalid action recieved.';
            break;
    }
}