console.log('Privet, Mir!');

//define a function computerPlay()
//create variables 'Rock', 'Paper', 'Scissors'
//the function must return a random value
//create variable with random int
//based on its result, return one of the variables above

//define a function playRound() with two args: playerChoice, computerChoice
//playerSelection needs to be case-insensitive
//return a string that declares the winner, use template literals
//define variables for user input and computer input

//define function game()
//use playRound() inside than function
//use loop to make five iterations and keep score in a variable
//use console.log() to display results of each round

const start = function game() {
    const item = ['ROCK', 'PAPER', 'SCISSORS'];
    const counter = {
      player: 0,
      cpu: 0,
      state: true
    };

    const getPlayerChoice = () => prompt('ROCK, PAPER or SCISSORS?').toUpperCase();

    const getCpuChoice = () => {
      const random = Math.floor(Math.random() * item.length);
      return item[random];
    };
  
    const play = function playRound(...args) {
      let combination = '';

      switch (true) {
        case (args[0] === item[1] && args[1] === item[0])
                      || (args[0] === item[2] && args[1] === item[1])
                      || (args[0] === item[0] && args[1] === item[2]):
  
          counter.player += 1;
          combination += `You win, ${args[0]} beats ${args[1]}!`;
          break;
  
        case (args[0] === item[1] && args[1] === item[2])
                      || (args[0] === item[2] && args[1] === item[0])
                      || (args[0] === item[0] && args[1] === item[1]):
  
          counter.cpu += 1;
          combination += `You lose, ${args[1]} beats ${args[0]}!`;
          break;
  
        case args[0] === args[1]:
          return 'Draw!';
  
        default:
          return 'error: Wrong value!';
      }
      return `End of round! ${combination}`;
    };

    const next = function continueGame() {
      let final = '';
      let iteration = '';

      while (counter.state !== false) {
        iteration = play(getPlayerChoice(), getCpuChoice());

        let alert = (check, positive, result) => {
          if (check) positive();
          else result() 
        };
        alert(
          (counter.player < 1 && counter.cpu < 1),
          () => console.log('computing...'),
          () => console.log(iteration)
        );

        if (counter.player > 2 || counter.cpu > 2) {
          counter.state = false;
          final = (counter.player > 2) ?
            'you win' :
            'you lose';
        }
      }
      return final;
    };
    return `Final result: ${next()}!`;
};

//console.log(start());
