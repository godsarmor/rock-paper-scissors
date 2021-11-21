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
