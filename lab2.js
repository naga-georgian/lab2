/**
 * Created by naga- on 9/14/2016.
 */

var userChoice = prompt('Question');
var computerChoice = Math.random();

computerChoice = computerChoice < .34 ? 'rock' :
    computerChoice < .66 ? 'paper' : 'scissors';

console.log('Computer Choice: ' + computerChoice);

function compare(userChoice, computerChoice) {
    var choices = {'rock':1, 'paper':1, 'scissors':1};

    if (!(userChoice in choices))
        return "You did not enter rock, paper, or scissors.";
    if (userChoice == computerChoice)
        return "The result is a tie!";
    if (userChoice == 'rock')
        return computerChoice == 'scissors' ? 'rock wins' : 'paper wins';
    if (userChoice == 'paper')
        return computerChoice == 'scissors' ? 'scissors wins' : 'paper wins';
    if (userChoice == 'scissors')
        return computerChoice == 'rock' ? 'rock wins' : 'scissors wins';
}

var result = compare(userChoice, computerChoice);
console.log(result);