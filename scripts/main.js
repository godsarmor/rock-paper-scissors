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

const start = function game() {
    const array = ['ROCK', 'PAPER', 'SCISSORS'];
    const counter = {
      player: 0,
      cpu: 0,
      state: ''
    };
  
    const getPlayerChoice = () => {
        return window.prompt('ROCK, PAPER or SCISSORS?').toUpperCase();
    };

    const getCpuChoice = () => {
      const random = Math.floor(Math.random() * array.length);
      return array[random];
    };
  
    const play = function playRound(...args) {
      let combination = '';
      switch (true) {
        case (args[0] === array[1] && args[1] === array[0])
                      || (args[0] === array[2] && args[1] === array[1])
                      || (args[0] === array[0] && args[1] === array[2]):
  
          counter.player += 1;
          combination += `You win, ${args[0]} beats ${args[1]}!`;
          break;
  
        case (args[0] === array[1] && args[1] === array[2])
                      || (args[0] === array[2] && args[1] === array[0])
                      || (args[0] === array[0] && args[1] === array[1]):
  
          counter.cpu += 1;
          combination += `You lose, ${args[1]} beats ${args[0]}!`;
          break;
  
        case args[0] === args[1]:
          return 'It\'s a tie!';
  
        default:
          return 'error: Wrong value!';
      }
  
      return `End of round! ${combination}`;
    };

    const rotate = function checkWinner() {
        let final = '';
        while (counter.state !== 'true') {
            final = play(getPlayerChoice(), getCpuChoice());
            // for debugging
            console.log(final);
            if (counter.player > 2 || counter.cpu > 2) {
                counter.state += 'true';
            }
        }
        return final;
    };
  
   return `the final is: ${rotate()}`;
};

start();
