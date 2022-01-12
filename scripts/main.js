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

const getPlayerChoice = () => i = prompt(`ROCK, PAPER or SCISSORS?`).toUpperCase();

function game() 
{
    const array = ['ROCK', 'PAPER', 'SCISSORS'];
    const counter = 
    {
        player: 0,
        cpu: 0
    };
    
    const getCpuChoice = () => 
    {
        const random = Math.floor(Math.random()*array.length);
        return array[random];
    };

    const playRound = (playerChoice, cpuChoice) => 
    {
        let combination = '';
        switch (true) 
        {
            case playerChoice === array[1] && cpuChoice === array[0] ||
                    playerChoice === array[2] && cpuChoice === array[1] ||
                    playerChoice === array[0] && cpuChoice === array[2]:
                
                ++counter.player;
                combination += `You win, ${playerChoice} beats ${cpuChoice}!`;
                break;
                
            case playerChoice === array[1] && cpuChoice === array[2] ||
                    playerChoice === array[2] && cpuChoice === array[0] ||
                    playerChoice === array[0] && cpuChoice === array[1]:
                
                ++counter.cpu;
                combination += `You lose, ${cpuChoice} beats ${playerChoice}!`;
                break;

            case playerChoice === cpuChoice:
                return 'It\'s a tie!';
                
            default:
                return 'error: Wrong value!';
        }

        return `End of round! ${combination}`;
    };

    let result = '';

    while (true)
    {
        result = playRound(getPlayerChoice(), getCpuChoice());
        console.log(result);
        if (counter.player > 2 || counter.cpu > 2) break;
    }

    return `The final result is: ${result}`;
}