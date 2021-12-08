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

let getPlayerChoice = () => {
    return result = prompt(`ROCK, PAPER or SCISSORS?`).toUpperCase();;
}

let getCpuChoice = () => {
    let result = '';
    let intNum = Math.floor(Math.random()*3);
    
    switch (intNum) {
        case 0:
            result += 'ROCK';
            break;

        case 1:
            result += 'PAPER';
            break;
            
        case 2:
            result += 'SCISSORS';
            break;
    }
    return result;
}

function game() {
    
    let result = '';

    let intCountPlayer = 0;
    let intCountCpu = 0;

    let playRound = (playerChoice, cpuChoice) => {

        let result = '';
        
        switch (true) {
            case playerChoice === 'PAPER' && cpuChoice === 'ROCK' ||
                    playerChoice === 'SCISSORS' && cpuChoice === 'PAPER' ||
                    playerChoice === 'ROCK' && cpuChoice === 'SCISSORS':
                
                intCountPlayer++;
                result += `You win! ${playerChoice} beats ${cpuChoice}!`;
                break;
                
            case playerChoice === 'PAPER' && cpuChoice === 'SCISSORS' ||
                    playerChoice === 'SCISSORS' && cpuChoice === 'ROCK' ||
                    playerChoice === 'ROCK' && cpuChoice === 'PAPER':
                
                intCountCpu++;
                result += `You lose! ${cpuChoice} beats ${playerChoice}!`;
                break;

            case playerChoice === cpuChoice:
                result += 'It\'s a tie!';
                break;
                
            default:
                result += 'error: Wrong value!';
                break;
        }
        return result;
    }

    while (true) {
        result = playRound(getPlayerChoice(), getCpuChoice());
        console.log(`the round result is: ${result}`);

        if (intCountPlayer === 3 || intCountCpu === 3) {
            break;
        }
    }
    return `the final result is: ${result}`;
}