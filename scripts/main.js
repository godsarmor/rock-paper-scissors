console.log('Privet, Mir!');

//define a function computerPlay()
//create variables 'Rock', 'Paper', 'Scissors'
//the function must return a random value
//create variable with random int
//based on its result, return one of the variables above

//define a function playRound() with two args: playerChoice, computerChoice
//playerSelection needs to be case-insensetive
//return a string that declares the winner, use template literals
//define variables for user input and computer input

//define function game()
//use playRound() inside than funcnion
//use loop to make a five iterations and keep score in a variable
//use console.log() to display results of each round

function game() {
    
    const rock = 'ROCK';
    const paper = 'PAPER';
    const scissors = 'SCISSORS';

    let result = '';
        
    let countPlayer = 0;
    let countCpu = 0;

    let getPlayerChoice = () => {
    
        let result = prompt('Enter either \"ROCK\", \"PAPER\" or \"SCISSORS\":');
        return result.toUpperCase();
    }

    let getCpuChoice = () => {
    
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

    function playRound(playerChoice, cpuChoice)  {
        
        let result = '';
        
        switch (true) {
            case playerChoice === paper && cpuChoice === rock ||
                    playerChoice === scissors && cpuChoice === paper ||
                    playerChoice === rock && cpuChoice === scissors:
                
                countPlayer++;
                result += `You win! ${playerChoice} beats ${cpuChoice}!`;
                break;
                
            case playerChoice === paper && cpuChoice === scissors ||
                    playerChoice === scissors && cpuChoice === rock ||
                    playerChoice === rock && cpuChoice === paper:
                
                countCpu++;
                result += `You lose! ${cpuChoice} beats ${playerChoice}!`;
                break;

            case playerChoice === cpuChoice:
                result += 'It\'s a tie!';
                break;
                
            default:
                result += 'error: Enter either \"ROCK\", \"PAPER\" or \"SCISSORS\"!';
                break;
        }
        return result;
    }

    while (true) {
        result = playRound(getPlayerChoice(), getCpuChoice());
        console.log(`the round result is: ${result}`);

        if (countPlayer === 3 || countCpu === 3) {
            break;
        }
    }
    return `the final result is: ${result}`;
}