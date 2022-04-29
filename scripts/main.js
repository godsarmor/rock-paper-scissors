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

const getPlayerChoice = function() {
  let playerName;
  do {
    playerName = prompt('ROCK, PAPER or SCISSORS?').toUpperCase();
  } while (!playerName);
  return playerName;
};

const game = function() {
  const item = ['ROCK', 'PAPER', 'SCISSORS'];
  const container = document.body.getElementsByTagName('div')[0];
  const counter = {
    player: 0,
    cpu: 0,
    state: true
  };

  const getCpuChoice = () => {
    const random = Math.floor(Math.random() * item.length);
    return item[random];
  };

  const playRound = function(...args) {
    switch (true) {
      case (args[0] === item[1] && args[1] === item[0])
        || (args[0] === item[2] && args[1] === item[1])
        || (args[0] === item[0] && args[1] === item[2]):

        counter.player += 1;
        return `You win, ${args[0]} beats ${args[1]}!`;

      case (args[0] === item[1] && args[1] === item[2])
        || (args[0] === item[2] && args[1] === item[0])
        || (args[0] === item[0] && args[1] === item[1]):

        counter.cpu += 1;
        return `You lose, ${args[1]} beats ${args[0]}!`;

      case args[0] === args[1]:
        return 'Draw!';

      default:
        return 'error: Wrong value!';
    }
  };

  const nextRound = function() {
    let final;

    while (counter.state !== false) {
      const para = document.createElement('div');
      para.classList.add('result');
      para.textContent = playRound(getPlayerChoice(), getCpuChoice());
      container.appendChild(para);

      if (counter.player > 4 || counter.cpu > 4) {
        counter.state = false;
        final = (counter.cpu > 4) ?
          'Defeat!' :
          'Win!';
      }
    }
    return final;
  };

  const printResult = function(text) {
    const output = document.createElement('div');
    output.textContent = text;
    return container.appendChild(output);
  };

  return printResult(nextRound());
};

game();
