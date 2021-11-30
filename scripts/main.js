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
    
    const strRock = 'ROCK';
    const strPaper = 'PAPER';
    const strScissors = 'SCISSORS';

    let strResult = '';
        
    let intCountPlayer = 0;
    let intCountCpu = 0;

    let getPlayerChoice = () => {
    
        let result = prompt(`Enter either ${strRock}, ${strPaper} or ${strScissors}:`);
        return result.toUpperCase();
    }

    let getCpuChoice = () => {
    
        let strResult = '';
        
        let intNum = Math.floor(Math.random()*3);
        
        switch (intNum) {
            case 0:
                result += strRock;
                break;
            case 1:
                result += strPaper;
                break;
            case 2:
                result += strScissors;
                break;
        }
        return strResult;
    }

    let playRound = (playerChoice, cpuChoice) => {
        
        let strResult = '';
        
        switch (true) {
            case playerChoice === strPaper && cpuChoice === strRock ||
                    playerChoice === strScissors && cpuChoice === strPaper ||
                    playerChoice === strRock && cpuChoice === strScissors:
                
                intCountPlayer++;
                strResult += `You win! ${playerChoice} beats ${cpuChoice}!`;
                break;
                
            case playerChoice === strPaper && cpuChoice === strScissors ||
                    playerChoice === strScissors && cpuChoice === strRock ||
                    playerChoice === strRock && cpuChoice === strPaper:
                
                intCountCpu++;
                strResult += `You lose! ${cpuChoice} beats ${playerChoice}!`;
                break;

            case playerChoice === cpuChoice:
                strResult += 'It\'s a tie!';
                break;
                
            default:
                strResult += `error: Wrong value! Enter either ${strRock}, ${strPaper} or ${strScissors}.`;
                break;
        }
        return strResult;
    }

    while (true) {
        strResult = playRound(getPlayerChoice(), getCpuChoice());
        console.log(`the round result is: ${strResult}`);

        if (intCountPlayer === 3 || intCountCpu === 3) {
            break;
        }
    }
    return `the final result is: ${strResult}`;
}