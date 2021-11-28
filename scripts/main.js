console.log('Privet, Mir!');

//define a function computerPlay()
//create variables 'Rock', 'Paper', 'Scissors'
//the function must return a random value
//create variable with random int
//based on its result, return one of the variables above

function getPlayerChoice() {
    
    let result = prompt('Enter either \"ROCK\", \"PAPER\" or \"SCISSORS\":');
    return result.toUpperCase();
}

function getCpuChoice() {
    
    //may not needed, but I'd like to keep them  
    const rock = 'ROCK';
    const paper = 'PAPER';
    const scissors = 'SCISSORS';

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

//define a function playRound() with two args: playerChoice, computerChoice
//playerSelection needs to be case-insensetive
//return a string that declares the winner, use template literals
//define variables for user input and computer input

//define function game()
//use playRound() inside than funcnion
//use loop to make a five iterations and keep score in a variable
//use console.log() to display results of each round

function game() {
    
    let result = '';
        
    let countPlayer = 0;
    let countCpu = 0;

    while (true) {
        result = playRound(getPlayerChoice(), getCpuChoice());
        console.log(`the round result is: ${result}`);

        if (countPlayer === 3 || countCpu === 3) {
            break;
        }
    }

    function playRound(playerChoice, cpuChoice)  {
        
        const variant_a = `${playerChoice} beats ${cpuChoice}!`;
        const variant_b = `${cpuChoice} beats ${playerChoice}!`;
        
        let result = '';
        
        //TODO: group values by 
        switch (true) {
            case playerChoice === 'PAPER' && cpuChoice === 'ROCK':
                countPlayer++;
                result += `You win! ` + variant_a;
                break;
                
            case playerChoice === 'PAPER' && cpuChoice === 'SCISSORS':
                countCpu++;
                result += `You lose! ` + variant_b;
                break;
                
            case playerChoice === 'SCISSORS' && cpuChoice === 'PAPER':
                countPlayer++;
                result += `You win! ` + variant_a;
                break;
                
            case playerChoice === 'SCISSORS' && cpuChoice === 'ROCK':
                countCpu++;
                result += `You lose! ` + variant_b;
                break;
                
            case playerChoice === 'ROCK' && cpuChoice === 'SCISSORS':
                countPlayer++;
                result += `You win! ` + variant_a;
                break;
                
            case playerChoice === 'ROCK' && cpuChoice === 'PAPER':
                countCpu++;
                result += `You lose! ` + variant_b;
                break;
                
            case playerChoice === cpuChoice:
                result += 'It\'s a tie.';
                break;
                
            default:
                result += 'error: Enter either \"ROCK\", \"PAPER\" or \"SCISSORS\"!';
                break;
        }
        return result;
    }

    return `the final result is: ${result}`;
}